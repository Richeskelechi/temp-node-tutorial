const app = require('express')();
const logger = require('./test/middleware/logger')

// we can also use app.use to add the middleware to all our routes instead of adding it manually to all routes.
app.use('/api', logger)
// Note: app.use must come before all http request methods. 
// also once you add a path like the '/api' it means the middleware will be added to just the routes that starts with '/api '

app.get('/', (req, res) => {
    console.log('Home');
    res.send('Home')
})
app.get('/api/about', (req, res) => {
    res.send('About')
})

app.get('/api/items', (req, res) => {
    res.send('Items')
})
app.listen(3060, () => {
    console.log(`http://localhost:3060/`);
})