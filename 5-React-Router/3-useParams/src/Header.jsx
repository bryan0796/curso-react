import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Home from './Home';
import Sobre from './Sobre';

const Header = () => {
  const activeStyle = {
      color: 'tomato',
  }

  const location = useLocation();

  React.useEffect(() => {
    console.log('mudou a rota')
  }, [location])

  return (
    <nav>
      <NavLink to='/' end activeStyle={activeStyle} element={<Home/>} >Home</NavLink>
      {' '}
      <NavLink to='sobre' activeStyle={activeStyle} element={<Sobre/>} >Sobre</NavLink>

    </nav>
  )
}

export default Header