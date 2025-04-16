import React from 'react';
import { Route, Routes } from 'react-router-dom'; 
import Home from '../pages/Home';
import ArticlesEX from '../Articles/Articles';
import ArticleDetails from '../Modules/ArticleDetails'; // Component to handle dynamic articles

function RouterComponent() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CEOLI" element={<ArticlesEX />} />
        <Route path="/CDVM" element={<ArticlesEX />} />
        <Route path="/CRTV" element={<ArticlesEX />} />

        <Route path="/articles/:articleName" element={<ArticleDetails />} />
      </Routes>
  );
}

export default RouterComponent;