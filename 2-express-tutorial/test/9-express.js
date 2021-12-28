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
app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params);
    const productID = req.params.productID;
    const reviewID = req.params.reviewID;
    res.send('Hello Review');
})

app.get('/api/v1/query', (req, res) => {
    console.log(req.query);
    const { search, limit } = req.query;
    let sortedProduct = [...products]
    if (search) {
        sortedProduct = sortedProduct.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if (limit) {
        sortedProduct = sortedProduct.slice(0, Number(limit))
    }
    if (sortedProduct.length < 1) {
        // return res.status(200).send('No Product Matched Your search')
        return res.status(200).json({ success: true, data: [] })
    }
    res.status(200).json(sortedProduct)
})

app.listen(3030, () => {
    console.log(`http://localhost:3030/`);
})

