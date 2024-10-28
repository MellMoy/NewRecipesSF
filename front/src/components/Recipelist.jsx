import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const RecipeDetail = () => {
    const { id } = useParams(); // Получаем ID из URL
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/api/recipe/${id}/`); // Предполагается, что API поддерживает этот маршрут
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setRecipe(data); // Предполагается, что data - это объект рецепта
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRecipe();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!recipe) {
        return <div>No recipe found</div>;
    }

    return (
        <div>
            <h1>{recipe.name}</h1>
            <p>{recipe.description}</p>
            <Link to='/'>Назад на главную</Link>
        </div>
    );
};

export default RecipeDetail;