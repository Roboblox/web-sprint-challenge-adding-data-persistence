const express = require('express');

const ProjectRouter = require('./data/project-router.js');

const server = express();

server.use(express.json());
server.use('/api/schemes', SchemeRouter);

module.exports = server;