// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Home.jsx';
import Categories from './Categories.jsx';
import RecipeDetail from './RecipeDetail.jsx';
import NotFound from './NotFound.jsx';
import CategoryDetails from './CategoryDetails.jsx';


function App() {
    return (
        <Router>
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/categories" element={<Categories/>} />
            <Route path="/categories/recipes/" element={<RecipeDetail/>} />
            <Route path="/category/" element={<CategoryDetails/>} />
            <Route path="*" element={<NotFound />} /> 
          </Routes>
        </Router>
      );
}

export default App;