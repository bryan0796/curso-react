import React from 'react';
import {useLocation, useParams} from 'react-router-dom';

const Produtos = () => {

  const params = useParams();
  const location = useLocation;

  const search = new URLSearchParams(location.search);
  console.log(search)

  return (
    <div>
      <h1>Produto: {params.id}</h1>
    </div>
  )
}

export default Produtos