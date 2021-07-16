// build your server here and require it from index.js
const express = require('express');

const projRouter = require('./project/router');
const resourceRouter = require('./resource/router');
const taskRouter = require('./task/router');

const server = express();

server.use(express.json);

server.use('/api/project', projRouter);
server.use('/api/resource', resourceRouter);
server.use('/api/task', taskRouter);

server.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack
  });
});

module.exports = server;
