const express = require('express');
const router = express.Router();
const Recipe = require('../models/recipe');

// GET all recipes
router.get('/recipes', (req, res) => {
    Recipe.find().sort({
            createdAt: -1
        })
        .then((result) => {
            const recipes = result;
            res.json(recipes);
        }).catch((err) => {
            console.log(err);
        })
})

// POST New Recipe
router.post('/recipes', (req, res) => {
    const recipe = new Recipe({
        title: req.body.title,
        body: req.body.body,
        date: req.body.date,
        img: req.body.img
    });
    recipe.save()
        .then((result) => {
            res.send(result);
            res.end();
        }).catch((err) => {
            console.log(err);
        })
});

// Get Recipe by ID
router.get('/recipes/:id', (req, res) => {
    const recipeId = req.params.id;
    Recipe.findById(recipeId).then((result) => {
        res.json({
            result
        });
    }).catch((err) => {
        console.log(err)
    })
});

// Delete (or Complete)
router.delete('/recipes/:id', (req, res) => {
    const recipeId = req.params.id;
    Recipe.findByIdAndDelete(recipeId).then((result) => {
        res.send('Deleted');
    }).catch((err) => {
        console.log(err)
    })
});


module.exports = router;