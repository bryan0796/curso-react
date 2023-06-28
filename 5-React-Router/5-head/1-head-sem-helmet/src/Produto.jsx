import React from 'react';
import { useParams, NavLink, Routes, Route } from 'react-router-dom';
import ProdutoDescricao from './ProdutoDescricao';
import ProdutoAvaliacao from './ProdutoAvaliacao';
import ProdutoCustomizado from './ProdutoCustomizado';
import Head from './Head';

const Produto = () => {
  const params = useParams;

  return (
    <div>
      <Head title="Produto" description='Essa é a descrição de Produto' />

      <h1>Produto: {params.id}</h1>
      <nav>
        <NavLink to="">Descrição</NavLink>
        {' '}
        <NavLink to="avaliacao">Avaliação</NavLink>
        {' '}
        <NavLink to="customizado">Customizado</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<ProdutoDescricao />} />
        <Route path="avaliacao" element={<ProdutoAvaliacao />} />
        <Route path="customizado" element={<ProdutoCustomizado />} />
      </Routes>
    </div>
  );
};

export default Produto;
