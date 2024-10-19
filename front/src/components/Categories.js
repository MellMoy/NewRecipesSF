// src/components/Categories.js
import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = ['Супы', 'Салаты', 'Основные блюда', 'Десерты'];

  return (
    <div>
      <h1>Категории блюд</h1>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <Link to={`/recipes/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
      <Link to="/">Назад на главную</Link>
    </div>
  );
};

export default Categories;