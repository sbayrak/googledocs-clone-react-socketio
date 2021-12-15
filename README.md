# Google Docs Clone

This is a demo of Google Docs clone, simply you can work on the same document with your friend, and share it later. <br>
<br>
The document is automatically saved every 2 seconds.

# Production Links

[GoogleDoc-Clone](https://googledocs-clone-sbayrak.netlify.app/) <br> <br>
[![Netlify Status](https://api.netlify.com/api/v1/badges/4e7d09ba-10d0-4578-b593-c9d953e4747f/deploy-status)](https://app.netlify.com/sites/googledocs-clone-sbayrak/deploys)

> The backend is deployed to Heroku, so frontend and backend are deployed on different cloud providers. You may use other providers that are able to deploy a Node.js application.

<br> <br>

## Tech Stack

- React.js
- Node.js
- Socket.io
- MongoDB

<br> <br>

## Dependencies

Since there are **_client_** and **_server_** folders, please refer to `package.json` file in both folders. <br>
Therefore, please run `npm install` in both folders.

<br> <br>

## Environment Variables

You need to add your own MongoDB URI to the `connectDB.js` file in order to connect to the database.
