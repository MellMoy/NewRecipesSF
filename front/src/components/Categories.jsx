// src/components/Categories.js
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function Category() {
  const category  = useParams().category;
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);

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

  }, []);
  if (loading) {
    return <div>Загрузка...</div>;
  }

  return (
    <div>
      <h1>{category}</h1>
      <div>
        {dishes.map((dish) => (
          <Link key={dish.id}>{dish.categoryType} </Link>
        ))}
      </div>
      <Link to="/">Назад на главную</Link>
    </div>
  );
};

export default Category;