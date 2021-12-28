const http = require('http');
const { readFileSync } = require('fs');

// get all files 
const homePage = readFileSync('./index.html')
const server = http.createServer((req, res) => {
    let url = req.url;
    console.log(url);
    if (url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.end(homePage)
    } else if (url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.end("<h3>Welcome to the About Page</h3>")
    } else {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.end("<h1>Page Not Found</h1>")
    }
});




server.listen(3040, () => console.log('Listening on port 3040'))