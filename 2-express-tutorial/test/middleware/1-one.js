const app = require('express')();

// req => Middleware => res 

const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear()
    console.log(`${method} ${url} ${time}`);
    // when ever you work with midlewares you must use the next function to pass it unto the next middleware. 
    // you can omit the next function only when you dont have any other thing to do then you can use res.send() to end 
    next()
}

app.get('/', logger, (req, res) => {

    res.send('Home')
})
app.get('/about', logger, (req, res) => {
    res.send('About')
})

app.listen(3060, () => {
    console.log(`http://localhost:3060/`);
})