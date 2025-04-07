// RouterArticles.jsx
import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'; // Link for navigation
import Home from '../pages/Home';
import AlertasEjemplo from '../pages/AlertasEjemplo';
//import Modules from './Alertas-module';
import ArticlesEX from '../Articles/Articles';

function RouterComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mi-otro-componente-de-articulo" element={<AlertasEjemplo/>} /> 
        <Route path="/CEOLI" element={<ArticlesEX/>} />
        <Route path="/AEALC" element={<ArticlesEX/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterComponent;

//Agregar paths en "Routes"