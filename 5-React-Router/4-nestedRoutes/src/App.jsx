import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Produto from './Produto';
import NaoEncontrada from './NaoEncontrada';

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='login' element={<Login/>} />
        <Route path='produto/:id/*' element={<Produto/>} />
        <Route path='*' element={<NaoEncontrada/>}/>
      </Routes>
    </BrowserRouter>
  )
};

export default App;
