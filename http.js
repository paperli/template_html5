const http = require('http'),
path = require('path'),
url = require('url'),
filesys = require('fs');

const hostname = 'localhost';
const port = 8080;

http.createServer((req, res) => {
	var my_path = url.parse(req.url).pathname;
	var full_path = path.join(process.cwd(),my_path);
	filesys.exists(full_path,(exists) => {
		if (!exists){
			res.writeHeader(404, {
				"Content-Type": "text/plain"
			});
		} else {
			filesys.readFile(full_path, "binary", function(err,file){
				if (err){
					res.writeHeader(500, {
						"Content-Type": "text/plain"
					});
					res.write(err+"\n");
					res.end();
				} else {
					res.writeHeader(200);
					res.write(file,"binary");
					res.end();
				}
			});
		}
	});
}).listen(port,hostname,() => {
	console.log(`Server running at http://${hostname}:${port}/`);
});