// src/components/Categories.js
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function Category() {
  const category  = useParams();
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/dishes/?category=${category}`)
      .then(res => {
        setDishes(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });

  }, [category]);
  if (loading) {
    return <div>Загрузка...</div>;
  }

  return (
    <div>
      <h1>Категории блюд</h1>
      <ul>
        {dishes.map((name) => (
          <li key={dish.id}>
            <Link to={`/recipes/${name.id}`}>{name.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/">Назад на главную</Link>
    </div>
  );
};

export default Category;