const http = require('http');
const server = http.createServer();
server.on('request', (req, res) => {
    res.end("Welcome to Events")
})

server.listen(5500, () => console.log("Server listening on Port 5500......"))