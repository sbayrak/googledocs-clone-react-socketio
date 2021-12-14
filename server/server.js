const express = require('express');
const cors = require('cors');
const socketio = require('socket.io');
const http = require('http');

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

server.listen(process.env.PORT || 5000, () => console.log('Server connected'));
