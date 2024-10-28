// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Home.jsx';
import Categories from './Categories.jsx';
import NotFound from './NotFound.jsx';
import CategoryDetails from './CategoryDetails.jsx';
import RecipeList from './Recipelist.jsx';


function App() {
    return (
        <Router>
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/categories" element={<Categories/>} />
            <Route path="/category/:categoryType" element={<CategoryDetails/>} />
            <Route path="/recipe/:recipeId" element={<RecipeList/>} />
            <Route path="*" element={<NotFound />} /> 
          </Routes>
        </Router>
      );
}

export default App;