const express = require('express');
const Recipes = require('./recipes-model.js');
const router = express.Router();

router.get('/', (req, res) => {
    Recipes.getRecipes()
    .then(recipes => {
      res.json(recipes);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get recipes' });
    });
  });

  router.get('/:id', (req, res) => {
    const { id } = req.params;
    Recipes.findById(id)
    .then(recipes => {
      if (recipes) {
        res.json(recipes);
      } else {
        res.status(404).json({ message: 'Could not find recipie with given id.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get recipie' });
    });
  });

  router.get('/:id/list', (req, res) => {
    const { id } = req.params;
    Recipes.getShoppingList(id)
    .then(recipes => {
      res.json(recipes);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get recipes' });
    });
  });

  router.get('/:id/steps', (req, res) => {
    const { id } = req.params;
    Recipes.getInstructions(id)
    .then(steps => {
      res.json(steps);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get steps' });
    });
  });

  module.exports = router;