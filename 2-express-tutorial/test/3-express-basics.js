const express = require('express');
const app = express();

// app.get          - This is used to get or Read Data.
// app.post         - This is used to post or insert Data.
// app.put          - This is used to update or change Data.
// app.delete       - This is used to Delete or Remove Data.
// app.all
// app.use          - This is used to specify the middlewares to use.
// app.listen       - This is used to specify the port to use when running the server.

app.get('/', (req, res) => {
    console.log('User Hits the HomePage');
    res.status(200).send('Home Page');
})

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

