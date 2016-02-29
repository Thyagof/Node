﻿//server with 3 routes
'use strict';

var date = (new Date()).toJSON();

const http = require('http'),
    SUCCESS = {
        version: 1.0,
        name: 'Base',
        returned_at: date
    },
    ERROR = { message: 'Deu merda, fi!' };

http.createServer(function (req, res) {
    if (req.url === '/api/v1') {
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.write(JSON.stringify(SUCCESS));
    } else if (req.url === '/api/v1b') {
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.write(JSON.stringify(SUCCESS));
    } else if (req.url === '/api/v1c') {
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.write(JSON.stringify(SUCCESS));
    } else {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(ERROR));
    }
    res.end();
}).listen(3000, function () {
    console.log('Servidor rodando em localhost:3000');
});
