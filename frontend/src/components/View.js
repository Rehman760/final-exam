import React, { useEffect, useState } from 'react';
import axios from 'axios';

const View = ({ recipeId }) => {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`/api/recipes/${recipeId}`);
        setRecipe(response.data);
      } catch (error) {
        console.error('Error fetching recipe:', error);
      }
    };

    fetchRecipe();
  }, [recipeId]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{recipe.title}</h2>
      <h3>Ingredients:</h3>
      <p>{recipe.ingredients}</p>
      <h3>Instructions:</h3>
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default View;


