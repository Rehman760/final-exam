import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Edit = ({ recipeId }) => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`/api/recipes/${recipeId}`);
        const { title, ingredients, instructions } = response.data;
        setTitle(title);
        setIngredients(ingredients);
        setInstructions(instructions);
      } catch (error) {
        console.error('Error fetching recipe:', error);
      }
    };

    fetchRecipe();
  }, [recipeId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`/api/recipes/${recipeId}`, {
        title,
        ingredients,
        instructions,
      });

      console.log('Recipe updated:', response.data);
    } catch (error) {
      console.error('Error updating recipe:', error);
    }
  };

  return (
    <div>
      <h2>Edit Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required /><br />

        <label>Ingredients:</label>
        <textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} required /><br/>

        <label>Instructions:</label>
        <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} required /><br />

        <button type="submit">Update Recipe</button>
      </form>
    </div>
  );
};

export default Edit;
