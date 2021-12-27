const http = require('http')
const server = http.createServer((req, res) => {
    // console.log(req);
    if (req.url === '/') {
        res.write('Welcome to the Homepage');
        res.end()
    } else if (req.url === '/about') {
        res.write('<h1>This is a quick info about us.</h1>');
        res.end()
    } else {
        res.write(`
        <h1>Oops</h1>
        <p>We cant seem to find the page you are looking for</p> 
        <a href="/">Back Home </a>
        `)
        res.end()
    }
})
server.listen(6005)