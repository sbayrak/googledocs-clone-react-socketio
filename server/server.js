const express = require('express');
const cors = require('cors');
const socketio = require('socket.io');
const http = require('http');
const mongoose = require('mongoose');
const connectDB = require('./connectDB');
const dotenv = require('dotenv');
const Document = require('./Document');
dotenv.config();

const app = express();
app.use(cors());
const server = http.createServer(app);

const io = socketio(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

connectDB();

app.get('/', (req, res) => {
  res.status(200).send('hello!!!!');
});

const defaultValue = '';

io.on('connection', (socket) => {
  console.log('socket.io connected...');
  socket.on('get-document', async (documentId) => {
    const document = await findOrCreateDocument(documentId);
    socket.join(documentId);
    socket.emit('load-document', document.data);

    socket.on('send-changes', (delta) => {
      socket.broadcast.to(documentId).emit('receive-changes', delta);
    });

    socket.on('save-document', async (data) => {
      await Document.findByIdAndUpdate(documentId, { data });
    });
  });
});

async function findOrCreateDocument(id) {
  if (id == null) return;

  const document = await Document.findById(id);
  if (document) return document;
  return await Document.create({ _id: id, data: defaultValue });
}

server.listen(process.env.PORT || 5000, () =>
  console.log('Server listening...')
);
