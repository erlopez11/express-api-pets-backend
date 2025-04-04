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

//GET /pets Index Route
router.get('/', async (req, res) => {
    try {
        const allPets = await Pet.find({});
        res.status(200).json(allPets);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});


module.exports = router;