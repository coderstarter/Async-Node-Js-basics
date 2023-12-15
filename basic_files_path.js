const path = require('path');

console.log(path.sep)
// it will join all and provide us the path
const filePath = path.join('/content' , 'subfolder' , 'text.txt');
console.log(filePath)

// show the last file
const base = path.basename(filePath)
console.log(base)

// to get the absolute path 
const absolute = path.resolve(__dirname, 'content' , 'subfolder' , 'text.txt')
console.log(absolute)