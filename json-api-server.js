const http = require('http'),
      url = require('url');

const port = process.argv[2],
      routes = {
          '/api/parsetime': query => {
            const date = new Date(query.iso);
            return {
                'hour': date.getHours(),
                'minute': date.getMinutes(),
                'second': date.getSeconds()
            }
          },
          '/api/unixtime': query => ({ 'unixtime': new Date(query.iso).getTime() })
      };

const server = http.createServer((req, res) => {
    const reqInfo = url.parse(req.url, true),
          handler = routes[reqInfo.pathname];

    if (handler) {
        res.writeHead(200, {'content-type': 'application/json'});
        res.end(JSON.stringify(handler(reqInfo.query)));
    } else {
        res.writeHead(404, {'content-type': 'text/plain'});
        res.end("Ups it appears we don't have the url you requested");
    }
}).on('error', err => console.error(err));

server.listen(port);