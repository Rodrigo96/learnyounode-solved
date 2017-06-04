const fs = require('fs'),
      path = require('path');

module.exports = (dirName, fileExt, done) => {
    fs.readdir(dirName, (err, data) => {
        if (err) return done(err);
        done(null, data.filter(file => path.extname(file) === '.' + fileExt));
    });
};