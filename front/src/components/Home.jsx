// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Сайт с вашиби любимыми блюдами</h1>
      <button>
      <Link to="/categories">Перейти к категориям блюд</Link>
      </button>
    </div>
  );
};

export default Home;