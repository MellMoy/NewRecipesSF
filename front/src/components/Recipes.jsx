// src/components/Recipes.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const Recipes = () => {
  const { category } = useParams();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await axios.get(`http://127.0.0.1:8000/api/dishes/?category=${category}`);
      setRecipes(response.data);
    };

    fetchRecipes();
  }, [category]);

  return (
    <div>
      <h1>Рецепты для {category}</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/categories">Назад к категориям</Link>
    </div>
  );
};

export default Recipes;