import React from 'react';
import { Route, Routes } from 'react-router-dom'; 
import Home from '../pages/Home';
import ArticleDetails from '../Modules/ArticleDetails'; 

function RouterComponent() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/articles/:articleName" element={<ArticleDetails />} />
      </Routes>
  );
}

export default RouterComponent;