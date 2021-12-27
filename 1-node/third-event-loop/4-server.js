const http = require('http')

const server = http.createServer((req, res) => {
    console.log('Request Event');
    res.end('Hello World!!!');
})
server.listen(5020, () => {
    console.log('Server Listening on Port 5020.......');
})