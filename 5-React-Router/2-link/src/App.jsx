import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Sobre from './Sobre';
import NotFound from './NotFound';
import Login from './Login';

const App = () => {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='sobre' element={<Sobre />} />
      <Route path='login' element={<Login />} ></Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
    </BrowserRouter>
  )
};

export default App;
