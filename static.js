const finalhandler = require('finalhandler'),
http = require('http'),
serveStatic = require('serve-static');

const hostname = 'localhost';
const port = 8080;

var serve = serveStatic('public', {'index': ['index.html', 'index.html']});

http.createServer((req,res) => {
	var done = finalhandler(req,res);
	serve(req,res,done);
}).listen(port,hostname,() => {
	console.log(`Server running at http://${hostname}:${port}/`);
});