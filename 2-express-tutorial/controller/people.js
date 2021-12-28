const { people } = require('../data')

const getPeople = ((req, res) => {
    res.status(200).json({ success: true, data: people })
})

const createUser = ((req, res) => {
    let name = req.body.name;
    if (name == '') {
        return res.status(401).json({ success: false, msg: "Please Provide a name" })
    } else {
        return res.status(200).json({ success: true, person: name })
    }
})

const createUserPostman = ((req, res) => {
    let { name, id } = req.body;
    if (!name || !id) {
        return res.status(400).send("Please Provide a name or/and an ID")
    } else {
        let person = { id: id, name: name }
        return res.status(200).json({ success: true, data: [...people, person] })
    }
})

const updateUser = ((req, res) => {
    const { id } = req.params;
    const { name } = req.body;
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

const deleteUser = ((req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id));
    if (!person) {
        return res.status(404).json({ success: false, msg: "Please Provide a valid Id" })
    }
    const newPeople = people.filter((person) => person.id !== Number(req.params.id));
    return res.status(200).json({ success: true, data: newPeople })
})

module.exports = { getPeople, createUser, createUserPostman, updateUser, deleteUser }