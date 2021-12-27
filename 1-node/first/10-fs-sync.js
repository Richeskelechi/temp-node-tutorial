const fs = require('fs')
const firstRead = fs.readFileSync('../content/first.txt', 'utf-8')
const secondRead = fs.readFileSync('../content/second.txt', 'utf-8')
// note: there is a third parameter in line 6 which is for append. by default when using the writefile node overwrites all 
// content of the file. so we add a flag called a for append which tells node not to overwrite but to append to it if we want to.
fs.writeFileSync('../content/third.txt', `${firstRead},${secondRead}`, { flag: 'a' })

console.log(`The first file I read is ${firstRead}`);
console.log('************');
console.log(`The second file I read is ${secondRead}`);