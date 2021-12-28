const express = require('express');
const app = express();
const { people } = require('./data')

app.use(express.static('./methods-public'))
// the line below allows us to have access to our form values
app.use(express.urlencoded({ extended: false }))
// the line below allows us to parse json 
app.use(express.json())

app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people })
})

app.post('/login', (req, res) => {
    let name = req.body.name;
    if (name == '') {
        return res.status(400).send("Please Provide a name")
    } else {
        return res.status(200).json({ success: true, msg: `Welcome ${name}` })
    }
})

app.post('/api/postman/people', (req, res) => {
    let { name, id } = req.body;
    if (!name || !id) {
        return res.status(400).send("Please Provide a name or/and an ID")
    } else {
        let person = { id: id, name: name }
        return res.status(200).json({ success: true, data: [...people, person] })
    }
})

app.put('/api/people/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    // console.log(`${id} ${name}`);
    // res.send("Ok")
    const person = people.find((person) => person.id === Number(id));
    if (!person) {
        return res.status(404).json({ success: false, msg: "Please Provide a valid Id" })
    } else {
        const newPeople = people.map((person) => {
            if (person.id === Number(id)) {
                person.name = name;
            }
            return person
        })
        res.status(200).json({ success: true, data: newPeople })
    }

})
app.delete('/api/people/:id', (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id));
    if (!person) {
        return res.status(404).json({ success: false, msg: "Please Provide a valid Id" })
    }
    const newPeople = people.filter((person) => person.id !== Number(req.params.id));
    return res.status(200).json({ success: true, data: newPeople })
})
app.post('/api/people', (req, res) => {
    let name = req.body.name;
    if (name == '') {
        return res.status(401).json({ success: false, msg: "Please Provide a name" })
    } else {
        return res.status(200).json({ success: true, person: name })
    }
})
app.listen(3060, () => {
    console.log(`http://localhost:3060/`);
})