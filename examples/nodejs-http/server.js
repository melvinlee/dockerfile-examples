const http = require('http');
const port = process.env.PORT || 8080;

const server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello from nodejs!\n');
})

server.listen(port);

console.log(`Server running at port: ${port}\n`);