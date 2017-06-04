const http = require('http'),
      map = require('through2-map');

const port = process.argv[2];

const server = http.createServer((req, res) => {
    if (req.method !== 'POST') return res.end('Send me a POST you crazy!');
    req.pipe(map(chunk => chunk.toString().toUpperCase()))
       .pipe(res);
}).on('error', err => console.error(err));
server.listen(port);