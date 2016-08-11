var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]);

var bufferstring = buffer.toString();

var splitted = bufferstring.split('\n');

console.log(splitted.length-1);
