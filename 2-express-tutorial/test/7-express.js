const app = require('express')();

const { products, people } = require('./data')

app.get('/products', (req, res) => {
    res.status(200).json(products)
})
app.get('/people', (req, res) => {
    res.status(200).json(people)
})

app.listen(3030, () => {
    console.log(`http://localhost:3030/`);
})

