import React from 'react';
import { useParams, NavLink, Routes, Route, Outlet } from 'react-router-dom';
import ProdutoDescricao from './ProdutoDescricao';
import ProdutoAvaliacao from './ProdutoAvaliacao';
import ProdutoCustomizado from './ProdutoCustomizado';

const Produto = () => {
  const params = useParams;

  return (
    <div>
      <h1>Produto: {params.id}</h1>
      <nav>
        <NavLink to="">Descrição</NavLink>
        {' '}
        <NavLink to="avaliacao">Avaliação</NavLink>
        {' '}
        <NavLink to="customizado">Customizado</NavLink>
      </nav>
      <Outlet/>
    </div>
  );
};

export default Produto;
