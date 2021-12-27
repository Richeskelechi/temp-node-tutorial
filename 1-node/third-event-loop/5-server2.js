const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('<h1>Home Page</h1>');
    } else if (req.url === '/about') {
        // Blocking Code 
        for (let i = 0; i < 500; i++) {
            for (let j = 0; j < 500; j++) {
                console.log(`${i} ${j}`);
            }
        }
        res.end('<h1>About Page</h1>');
    } else if (req.url === '/contact') {
        res.end('<h1>Contact Page</h1>');
    } else {
        res.end('<h1>Error Page</h1>');
    }
})
server.listen(5030, () => { console.log('Server Listening On Port 5030......'); })