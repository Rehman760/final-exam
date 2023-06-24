import React, { useState } from 'react';
import axios from 'axios';

const Add = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/recipes', {
        title,
        ingredients,
        instructions,
      });

      console.log('Recipe added:', response.data);

      // Clear the form after successful submission
      setTitle('');
      setIngredients('');
      setInstructions('');
    } catch (error) {
      console.error('Error adding recipe:', error);
    }
  };

  return (
    <div>
      <h2>Add Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required /><br />

        <label>Ingredients:</label>
        <textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} required /><br />

        <label>Instructions:</label>
        <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} required /><br />

        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default Add;
