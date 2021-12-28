const express = require('express');
const app = express();
const peopleRoute = require('./routes/people');
const authRoute = require('./routes/auth');

app.use(express.static('./methods-public'))
// the line below allows us to have access to our form values
app.use(express.urlencoded({ extended: false }))
// the line below allows us to parse json 
app.use(express.json())
// The line of code below is to use the express Router 
app.use('/api/people', peopleRoute);
app.use('/login', authRoute);

app.listen(3060, () => {
    console.log(`http://localhost:3060/`);
})