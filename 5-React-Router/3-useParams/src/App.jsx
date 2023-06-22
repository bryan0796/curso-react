import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Sobre from './Sobre';
import Produtos from './Produtos';
import NaoEncontrada from './NaoEncontrada';
import Header from './Header';

const App = () => {
  return <BrowserRouter>
  <Header/>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='sobre' element={<Sobre/>} /> 
    <Route path='produtos/:id' element={<Produtos/>} />
    <Route path='*' element={<NaoEncontrada/>} />
  </Routes>
  </BrowserRouter>
};

export default App;
