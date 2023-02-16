// file.js
const fs = require('fs');

module.exports = function (filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

// index.js
const fileModule = require('./file');
fileModule('file.txt');