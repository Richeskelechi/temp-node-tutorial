// Here we are using destructuring
const { readFile, writeFile } = require('fs');
readFile('../content/first.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
})
const content = 'This is the content I want to write';
writeFile('../content/fourth.txt', content, (err, res) => {
    if (err) {
        console.log('Error creating a file');
    } else {
        console.log(`The file was created: ${res}`);
    }
})
