// src/components/RecipeDetail.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/category/recipes/`)
      .then(res => {
        setRecipe(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
    },[id]);

  if (!recipe) return <div>Загрузка...</div>;

  return (
      <div>
        <h1>Рецепты</h1>
        <div>
          {recipe.map((rec) => (
            <Link key={rec.id}>{rec.name}</Link>
          ))}
        </div>
        <Link to="/">Назад на главную</Link>
      </div>
    );
  };

export default RecipeDetail;