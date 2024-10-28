import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, Link} from 'react-router-dom';

function CategoryDetails() {
	const { categoryType } = useParams(); // Достаем параметр категории из URL
	const [dishes, setDishes] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios
			.get(`http://127.0.0.1:8000/api/category/recipes/`)
			.then(res => {
				const filteredDishes = res.data.filter(
					dish => dish.categoryType === categoryType
				);
				setDishes(filteredDishes);
				setLoading(false);
			})
			.catch(err => {
				console.error(err);
				setLoading(false);
			});
	}, [categoryType]);
	

	if (loading) {
		return <div>Загрузка...</div>;
	}

	return (
		<div>
			<h1>Блюда из категории: {categoryType}</h1>
			<ul>
				{dishes.map(dish => (
					<li key={dish.id}>{dish.name}{dish.dishes}</li>
					
				))}
				<Link to='/'>Назад на главную</Link>
			</ul>
		</div>
	);
}

export default CategoryDetails;
