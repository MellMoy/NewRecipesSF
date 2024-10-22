// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home.jsx';
import Categories from './Categories.jsx';
import Recipes from './Recipes.jsx';
import RecipeDetail from './RecipeDetail.jsx';
import NotFound from './NotFound.jsx';


function App() {
    return (
        <Router>
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/categories" element={<Categories/>} />
            <Route path="/recipes/:category" element={<Recipes/>} />
            <Route path="/recipes/:id" element={<RecipeDetail/>} />
            <Route path="*" element={<NotFound />} /> 
          </Routes>
        </Router>
      );
}

export default App;