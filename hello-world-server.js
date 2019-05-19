
// Importing required module for http

var http = require('http');

var port = 4827;
var host = "localhost";

http.createServer(function sample(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Node JS, Hello World ');
}).listen(port,host)

console.log('Server is running at http://%s:%s/', host, port);  