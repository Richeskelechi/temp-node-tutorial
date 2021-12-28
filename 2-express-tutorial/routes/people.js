const express = require('express');
const router = express.Router();
const { getPeople, createUser, createUserPostman, updateUser, deleteUser } = require('../controller/people')

router.get('/', getPeople)

router.post('/', createUser)

router.post('/postman', createUserPostman)

router.put('/:id', updateUser)

router.delete('/:id', deleteUser)

module.exports = router;