const http = require('http');

const url = process.argv[2];

http.get(url, res => {
    let output = '';
    res.setEncoding('utf8');
    res.on('data', data => output += data);
    res.on('end', () => {
        console.log(output.length);
        console.log(output);
    });
    res.on('error', err => console.error(err));
}).on('error', err => console.error(err));