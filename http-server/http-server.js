var http = require("http");
var fs = require("fs");
var url = require("url");

var server = http.createServer((req, resp) => {
  var url_parts = url.parse(req.url);
  var path = url_parts.pathname;

  fs.readFile(__dirname + path, (err, data) => {
    if (err) {
      resp.writeHead(404, { "Content-Type": "text/html" });
      resp.write("Not found");
      resp.end();
    } else {
      resp.writeHead(200, { "Content-Type": "text/html" });
      resp.write(data);
      resp.end();
    }
  });
});

server.listen(3000);
