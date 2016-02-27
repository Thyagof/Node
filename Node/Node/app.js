var http = require('http'), 
    path = require('path'),
    fs = require('fs'),
    index = fs.readFileSync('./public/index.html')

http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text-html' });
    response.end;
}).listen(8181, function () {
    console.log('Teste no 8181');
});