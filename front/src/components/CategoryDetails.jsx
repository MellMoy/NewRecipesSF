import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function CategoryDetails() {
  const { categoryType } = useParams();  // Достаем параметр категории из URL
  const [dishes, setDishes] = useState([]);

    // Здесь вы можете сделать запрос на сервер для получения блюд по категории
    // Например, если данные уже загружены:
    useEffect(() => {
      axios.get(`http://127.0.0.1:8000/api/category/categories/`)
        .then(res => {
          setDishes(res.data);
          setLoading(false);
        })

        .catch(err => {
          console.error(err);
          setLoading(false);
        });
    const allDishes = [
      { id: 4, name: "Тосканский суп с фаршем", categoryType: "Рецепты первых блюд" },
      { id: 5, name: "Жаркое по-деревенски", categoryType: "Рецепты вторых блюд" },
      { id: 6, name: "Шарлотка из печенья", categoryType: "Рецепты третьих блюд" },
    ];

    // Фильтруем блюда по выбранной категории
    const filteredDishes = allDishes.filter(dish => dish.categoryType === categoryType);
    setDishes(filteredDishes);
  }, [categoryType]);

  return (
    <div>
      <h1>Блюда из категории: {categoryType}</h1>
      <ul>
        {dishes.map((dish) => (
          <li key={dish.id}>{dish.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryDetails;
