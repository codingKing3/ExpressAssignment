// another way to access the file path
const path = require('path');

module.exports = path.dirname(process.mainModule.filename);
