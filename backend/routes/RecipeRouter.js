const express = require('express');
const router = express.Router();
const recipeController = require('../controller/recipeController');

// Create a new recipe
router.post('/', recipeController.createRecipe);

// Get all recipes
router.get('/', recipeController.getAllRecipes);

// Get a specific recipe
router.get('/:id', recipeController.getRecipeById);

// Update a recipe
router.put('/:id', recipeController.updateRecipe);

// Delete a recipe
router.delete('/:id', recipeController.deleteRecipe);

module.exports = router;
