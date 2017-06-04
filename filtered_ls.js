let fs = require('fs'),
    path = require('path');

let dirPath = process.argv[2],
    fileExt = '.' + process.argv[3];

fs.readdir(dirPath, (err, data) => {
    if (err) { console.log(err); }
    for (let i = 0; i < data.length; i++) {
        if (path.extname(data[i]) === fileExt) {
            console.log(data[i]);
        }
    }
});