const fs = require('fs'),
      http = require('http');

const port = process.argv[2],
      filePath = process.argv[3];

var server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/plain' });
    fs.createReadStream(filePath).pipe(res);
}).on('error', err => console.error(err));

server.listen(port);