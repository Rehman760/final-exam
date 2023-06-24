const Recipe = require('../models/recipe');

// Create a new recipe
exports.createRecipe = async (req, res) => {
  try{
    const {title,ingredients,instructions}=req.body;
    Recipe.create({ title,ingredients,instructions })
      .then((data) => {
        console.log("Saved Successfully...");
        res.status(201).send(data);
      })
      .catch((err) => {
        console.log(err);
        res.send({ error: err, msg: "Something went wrong!" });
      });
  }
  catch(err){}
};

// Get all recipes
exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    console.error('Error fetching recipes:', error);
    res.status(500).json({ error: 'Failed to fetch recipes' });
  }
};

// Get a specific recipe by ID
exports.getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }
    res.json(recipe);
  } catch (error) {
    console.error('Error fetching recipe:', error);
    res.status(500).json({ error: 'Failed to fetch recipe' });
  }
};

// Update a recipe
exports.updateRecipe = async (req, res) => {
  try {
    const { title, ingredients, instructions } = req.body;

    const recipe = await Recipe.findByIdAndUpdate(req.params.id, {
      title,
      ingredients,
      instructions,
    });

    if (!recipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }

    res.json(recipe);
  } catch (error) {
    console.error('Error updating recipe:', error);
    res.status(500).json({ error: 'Failed to update recipe' });
  }
};

// Delete a recipe
exports.deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!recipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }
    res.json({ message: 'Recipe deleted successfully' });
  } catch (error) {
    console.error('Error deleting recipe:', error);
    res.status(500).json({ error: 'Failed to delete recipe' });
  }
};
