const http = require('http');
const { readFileSync } = require('fs');

// get all files 
const homePage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogin = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req, res) => {
    let url = req.url;
    console.log(url);
    if (url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.end(homePage)
    } else if (url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.end("<h3>Welcome to the About Page</h3>")
    }
    // styles 
    else if (url === '/styles.css') {
        res.writeHead(200, { 'content-type': 'text/css' })
        res.end(homeStyles)
    }
    // js files 
    else if (url === '/browser-app.js') {
        res.writeHead(200, { 'content-type': 'text/javascript' })
        res.end(homeLogin)
    }
    // images / logo
    else if (url === '/logo.svg') {
        res.writeHead(200, { 'content-type': 'image/svg+xml' })
        res.end(homeImage)
    } else {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.end("<h1>Page Not Found</h1>")
    }
});




server.listen(3040, () => console.log('Listening on port 3040'))