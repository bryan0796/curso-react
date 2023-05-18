import React from 'react';

const Produto = ( {dados} ) => {
  
  return (
    <div>
      <h1>{dados.nome}</h1>
      <span>{dados.preco}</span>
      
      <img
        style={{ maxWidth: '500px', display: 'block', height: '300px' }}
        src= {dados.fotos[0].src}
        alt={dados.fotos[0].titulo}
      />
      <p>{dados.descricao}</p>
      <p><strong>Disponível:</strong> {dados.vendido ? 'Sim' : 'Não'}</p>
    </div>
  );
};

export default Produto;
