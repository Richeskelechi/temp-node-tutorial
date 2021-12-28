const express = require('express');
const morgan = require('morgan');
const app = express();
const logger = require('./test/middleware/logger');
const authorize = require('./test/middleware/authorize');
app.use(morgan('tiny'));

app.get('/', (req, res) => {
    console.log('Home');
    res.send('Home')
})
app.get('/api/about', (req, res) => {
    res.send('About')
})

app.get('/api/items', [logger, authorize], (req, res) => {
    res.send('Items')
    console.log(req.user);
})
app.listen(3060, () => {
    console.log(`http://localhost:3060/`);
})