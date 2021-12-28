const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear()
    console.log(`${method} ${url} ${time}`);
    // when ever you work with midlewares you must use the next function to pass it unto the next middleware. 
    // you can omit the next function only when you dont have any other thing to do then you can use res.send() to end 
    next()
}

module.exports = logger