import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const RecipeList = () => {
    const { id } = useParams(); // Получаем ID рецепта из URL
        const [recipe, setRecipe] = useState(null);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);

        useEffect(() => {
            const fetchRecipe = async () => {
                try {
                    const response = await axios.get(
                        `http://127.0.0.1:8000/api/recipes/${id}`
                    );
                    setRecipe(response.data); // Предполагается, что API возвращает один объект рецепта
                } catch (error) {
                    setError(error.message);
                } finally {
                    setLoading(false);
                }
            };

            fetchRecipe();
        }, [id]);

        if (loading) {
            return <div>Загрузка...</div>;
        }

        if (error) {
            return <div>Ошибка: {error}</div>;
        }

        if (!recipe) {
            return <div>Рецепт не найден</div>;
        }

        return (
            <div>
                <h1>{recipe.name}</h1>
                <p>{recipe.description}</p>
                <button>
      <Link to="/categories">Перейти к категориям блюд</Link>
      </button>
            </div>
        );
};

export default RecipeList;



