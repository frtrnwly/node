// my first node project - test

var http = require('http');
var port = process.env.port || 80;
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World from frtrnwly\n');
}).listen(port);