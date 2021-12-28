const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    let name = req.body.name;
    if (name == '') {
        return res.status(400).send("Please Provide a name")
    } else {
        return res.status(200).json({ success: true, msg: `Welcome ${name}` })
    }
})

module.exports = router;