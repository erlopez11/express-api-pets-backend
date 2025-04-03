const express = require('express');
const router = express.Router();
const Pet = require('../models/pet');

//POST /pets Create Route
router.post('/', async (req, res) => {
    try {
        const createPet = await Pet.create(req.body);
        res.status(201).json(createPet);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: error.message});
    }
});


module.exports = router;