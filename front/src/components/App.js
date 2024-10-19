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
          <Route path="/" exact component={<Home/>} />
          <Route path="/categories" component={<Categories/>} />
          <Route path="/recipes/:category" component={<Recipes/>} />
          <Route path="/recipes/:id" component={<RecipeDetail/>} />
        </Routes>
      </Router>
      
    );
}

export default App;