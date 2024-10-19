// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Главная страница</h1>
      <Link to="/categories">Перейти к категориям блюд</Link>
    </div>
  );
};

export default Home;