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
        console.log(error);
        res.status(500).json({error: error.message});
    }
});

//GET /pets/:petId Show Route
router.get('/:petId', async (req,res) => {
    try {
        const currentPet = await Pet.findById(req.params.petId);
        if(!currentPet) {
            res.status(404);
            throw new Error('Pet Not Found'); 
            //error message displays in p-tag in frontend for user like in React JWT auth lab
        }
        res.status(200).json(currentPet);
    } catch (error) {
        if (res.statusCode === 404) {
            res.json({error: error.message});
        } else {
            res.status(500).json({error: error.message});
        }
    }
});

//DELETE /pets/:petId Delete Route
router.delete('/:petId', async (req, res) => {
    try {
        const currentPet = await Pet.findByIdAndDelete(req.params.petId);
        if (!currentPet) {
            res.status(404);
            throw new Error('Pet Not Found');
        }
        res.status(200).json(currentPet);
    } catch (error) {
        if (res.statusCode === 404) {
            res.json({error: error.message});
        } else {
            console.log(error);
            res.status(500).json({error: error.message});
        }
    }
});

//UPDATE /pets/:petId Update Route
router.put('/:petId', async (req, res) => {
    try {
        const updatedPet = await Pet.findByIdAndUpdate(req.params.petId, req.body, {
            new: true,
        });
        if (!updatedPet) {
            res.status(404);
            throw new Error('Pet Not Found');
        }
        res.status(200).json(updatedPet);
    } catch (error) {
        if (res.statusCode === 404) {
            res.json({error: error.message});
        } else {
         
            res.status(500).json({error: error.message});
        }
    }
});

module.exports = router;