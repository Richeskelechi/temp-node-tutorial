const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    const fileStream = fs.createReadStream('../content/big.txt', 'utf8');
    fileStream.on('open', (data) => {
        fileStream.pipe(res)
    })
    fileStream.on('error', (err) => {
        res.end(err);
    })
}).listen(7000, () => console.log(`Server Running on Port 7000`))