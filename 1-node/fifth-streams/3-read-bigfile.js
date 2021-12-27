const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    const text = fs.readFileSync('../content/big.txt', 'utf8');
    res.end(text)
}).listen(7000, () => console.log(`Server Running on Port 7000`))