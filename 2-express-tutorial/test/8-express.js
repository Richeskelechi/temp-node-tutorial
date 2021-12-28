const app = require('express')();

const { products } = require('./data')

app.get('/', (req, res) => {
    res.send(`
    <h1>Home Page</h1>
    <a href='/api/products'>Products</a>
    `)
})

app.get('/api/products', (req, res) => {
    const newProduct = products.map((product) => {
        const { id, name, image, price } = product;
        return { id, name, image, price };
    })
    res.status(200).json(newProduct);
})

app.get('/api/products/:productID', (req, res) => {
    // console.log(req.params);
    const id = req.params.productID;
    const singleProduct = products.find((product) => product.id === Number(id))
    // console.log(singleProduct);
    if (singleProduct) {
        return res.status(200).json(singleProduct)
    } else {
        res.status(404).send("Product Not Found")
    }
})

app.listen(3030, () => {
    console.log(`http://localhost:3030/`);
})

