let fs = require('fs');

let filePath = process.argv[2];
var fileContents = fs.readFileSync(filePath, 'utf8');

console.log(fileContents.split('\n').length - 1);