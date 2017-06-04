let fs = require('fs');

let filePath = process.argv[2];

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) console.log(err);
    
    let newLines = data.match(/\n/g).length || 'no new line chars';

    console.log(newLines);
});