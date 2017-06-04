const ff = require('./filter-files.js');

const dirName = process.argv[2],
      fileExt = process.argv[3];

ff(dirName, fileExt, (err, data) => {
    if (err) console.log('There was an error: ' + err);
    data.forEach(file => console.log(file));
});