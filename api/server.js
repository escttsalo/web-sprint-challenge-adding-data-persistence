const express = require('express');
const resourceRouter = require('./resource/router')
const server = express();

server.use(express.json());

server.use('/api/resources', resourceRouter)

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