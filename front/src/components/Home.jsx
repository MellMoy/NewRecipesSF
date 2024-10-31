import React from 'react';
import { Link } from 'react-router-dom';
import video from '../media/video.mp4'; // Импортируйте ваше видео

const Home = () => {
  return (
    <div>
      <h1 className='category'>Сайт с вашими любимыми блюдами</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <video width="600" height="400" controls>
          <source src={video} type="video/mp4" />
          Ваш браузер не поддерживает видео тег.
        </video>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <button type="button" className="btn btn-info">
          <Link to="/categories" style={{ color: 'inherit', textDecoration: 'none' }}>Перейти к категориям блюд</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;