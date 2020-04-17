const express = require("express");

const SchemeRouter = require('./recipes/recipes-router');

const server = express();

server.use(express.json());

server.use('/api/recipes', SchemeRouter);

module.exports = server;