import React from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div style={{ background: '#9cd4ea', textAlign: 'center' }}>
      <h1>Header</h1>
      {/* Link */}
      <nav>
        <Link to="/">Home</Link> | <Link to="sobre">Sobre</Link>
      </nav>
      {/* NavLink */}
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>{' '}
        | <NavLink to="sobre">Sobre</NavLink> |{' '}
        <NavLink to="login">Login</NavLink>
      </nav>
    </div>
  );
};

export default Header;
