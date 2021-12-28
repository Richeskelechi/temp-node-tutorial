const app = require('express')();
const logger = require('./test/middleware/logger');
const authorize = require('./test/middleware/authorize');

// we can also use app.use to add the middleware to all our routes instead of adding it manually to all routes.
app.use([logger, authorize])

app.get('/', (req, res) => {
    console.log('Home');
    console.log(req.user);
    res.send('Home')
})
app.get('/api/about', (req, res) => {
    res.send('About')
    console.log(req.user);
})

app.get('/api/items', (req, res) => {
    res.send('Items')
    console.log(req.user);
})
app.listen(3060, () => {
    console.log(`http://localhost:3060/`);
})