// build your server here and require it from index.js
const express = require('express');

const projRouter = require('./project/router');
const resourceRouter = require('./resource/router');
const taskRouter = require('./task/router');

const server = express();

server.use(express.json());

server.use('/api/projects', projRouter);
server.use('/api/resources', resourceRouter);
server.use('/api/tasks', taskRouter);

server.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).json({
    message: err.message,
    stack: err.stack
  });
});


module.exports = server;
