import React, { useEffect, useState } from 'react';
import axios from 'axios';

const List = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('/api/get');
        setRecipes(response.data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  const handleDelete = async (recipeId) => {
    try {
      await axios.delete(`/api/delete/${recipeId}`);
      setRecipes(recipes.filter((recipe) => recipe._id !== recipeId));
      console.log('Recipe deleted:', recipeId);
    } catch (error) {
      console.error('Error deleting recipe:', error);
    }
  };

  return (
    <div>
      <h2>Recipes</h2>
      {recipes.map((recipe) => (
        <div key={recipe._id}>
          <h3>{recipe.title}</h3>
          <button onClick={() => handleDelete(recipe._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default List;
