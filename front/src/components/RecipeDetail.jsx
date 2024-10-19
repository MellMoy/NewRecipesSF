// src/components/RecipeDetail.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`https://api.example.com/recipes/${id}`);
        setRecipe(response.data);
      } catch (error) {
        console.error("Ошибка при загрузке рецепта:", error);
      }
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) return <div>Загрузка...</div>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <h2>Ингредиенты:</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2>Приготовление:</h2>
      <p>{recipe.instructions}</p>
      <Link to={`/recipes/${recipe.category}`}>Назад к рецептам</Link>
    </div>
  );
};

export default RecipeDetail;