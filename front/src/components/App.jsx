// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Categories from './Categories';
import Recipes from './Recipes';
import RecipeDetail from './RecipeDetail';

function App() {
  return (
    
      <Router>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/categories" element={<Categories/>} />
          <Route path="/recipes/:category" element={<Recipes/>} />
          <Route path="/recipes/:id" element={<RecipeDetail/>} />
        </Routes>
      </Router>
      
    );
}

export default App;