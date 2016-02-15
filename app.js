var serveStatic = require('serve-static')
var express = require('express');

var app = express();

const hostname = 'localhost';
const port = 8080;

app.use(serveStatic('public',{'index':['index.html','index.htm']}))

app.listen(port,hostname,() => {
	console.log(`Server running at http://${hostname}:${port}/`);
})