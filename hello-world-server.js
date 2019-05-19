
// Importing required module for http

var http = require('http');

http.createServer(function sample(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Node JS, Hello World ');
}).listen(4826,'localhost')

console.log('Server is running at http://localhost:4826/');  