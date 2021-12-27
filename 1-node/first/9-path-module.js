const path = require('path')

console.log(path.sep);

const filePath = path.join('content', 'subContent', 'text.txt');
console.log(filePath);

// this is used to get the last diretory of a path. 
const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subContent', 'text.txt');
console.log(absolute);