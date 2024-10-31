// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1 className='category'>Сайт с вашиби любимыми блюдами</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
  <button type="button" className="btn btn-info">
    <Link to="/categories" style={{ color: 'inherit', textDecoration: 'none' }}>Перейти к категориям блюд</Link>
  </button>
</div>
    </div>
  );
};

export default Home;