const express = require('express');
const app = express();

// setup static and middleware 
app.use(express.static('./public'));
// we can also put all files in the public folder and automatically the server will dumb the index file and render it to the page. 

// app.get('/', (req, res) => {
//     console.log('User Hits the HomePage');
//     res.status(200).sendFile(path.resolve(__dirname, './test/navbar-app/index.html'));
// })

app.get('/about', (req, res) => {
    console.log('User Hits the About Page');
    res.status(200).send('About Page');
})

app.all('*', (req, res) => {
    console.log('User Hits the Error Page');
    res.status(404).send(`
    <h1>Page Not Found</h1>
    <a href="http://localhost:3030/">Click to go back to the home page</a>
    `);
})
app.listen(3030, () => {
    console.log(`http://localhost:3030/`);
})

