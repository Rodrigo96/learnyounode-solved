const http = require('http');

let numberOfRes = 0,
    responses = [];
const urls = process.argv.slice(2);

urls.forEach(makeRequest);

function makeRequest(url, index) {
    http.get(url, res => {
        res.setEncoding('utf8');
        res.on('data', data => {
            if (!responses[index]) responses[index] = '';
            responses[index] += data;
        });
        res.on('end', () => {
            numberOfRes++;
            if (numberOfRes === urls.length)
                responses.forEach(res => console.log(res));
        });
    }).on('error', err => console.error(err));
}