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
			<h1 className='category'>Категории на выбор</h1>
			<ul>
				{dishes.map(dish => (
					< div className='catMain' key={dish.id}>
          <Link to={`/category/${dish.categoryType}`}>
						{dish.categoryType}
					</Link>
          </div>
				))}
		</ul>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30vh' }}>
  <button type="button" className="btn btn-info">
    <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Главная страница</Link>
  </button>
</div>
    </div>
	);
};

export default Category;