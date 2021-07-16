const express = require('express');
const server = express();

const resourceRouter = require('./resource/router')
const projectRouter = require('./project/router')

server.use(express.json());

server.use('/api/resources', resourceRouter)
server.use('/api/projects', projectRouter)

server.use('*', (req, res) => {
    res.status(200).json({message: "We're up!"})
});

server.use( (err, req, res, next) => { //eslint-disable-line
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    });
});

module.exports = server;