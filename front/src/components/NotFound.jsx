import React from 'react';
import { Link } from 'react-router-dom';
/**
 * NotFound component to handle unmatched routes.
 * @returns {JSX.Element} A simple 404 page.
 */
function NotFound() {
  return (
    <div className="not-found">
      <h1>404: Страница не найдена</h1>
      <p>Страница, которую вы ищете, не существует.</p>
      <button type="button" className="btn btn-info">
      <Link to="/categories">Главная страница</Link>
      </button>
    </div>
  );
}

export default NotFound;