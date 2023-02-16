// file.js
const fs = require('fs');

module.exports = function (filePath, callback) {
  fs.readFile(filePath, 'utf-8', (error, data) => {
    if (error) {
      callback(error);
      return;
    }
    console.log(data);
    callback(null, data);
  });
};

// index.js
const fileModule = require('./file');
fileModule('file.txt', (error, data) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log(data);
});