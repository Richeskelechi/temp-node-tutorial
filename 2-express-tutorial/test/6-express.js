const app = require('express')();

app.get('/', (req, res) => {
    res.status(200).json([{ name: 'Riches', age: 21, phone: '081' }, { name: 'Kelechi', age: 19, phone: '086' }])
})

app.listen(3030, () => {
    console.log(`http://localhost:3030/`);
})

