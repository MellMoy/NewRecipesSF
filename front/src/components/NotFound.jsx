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
      <Link to="/">Назад на главную</Link>
    </div>
  );
}

export default NotFound;