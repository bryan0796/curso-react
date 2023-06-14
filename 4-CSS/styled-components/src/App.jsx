import React from 'react';
import styled from 'styled-components';

const ProdutosContainer = styled.div`
  display: flex;
`;

const Produto = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: tomato;
`;
const Paragrafo = styled.p`
  font-size: 1.5rem;
  color: green;
`;

const Preco = styled.p`
  background: ${( {cor} ) => cor};
  color: #fff;
`;

const Comprar = styled.button`
  background: ${({ativo}) => ativo ? '#000' : '#fff'};
  font-size: 1rem;
  border: 2px solid #000;
  border-radius: 5px;
  padding: .5rem;
  color: ${(target) => target.ativo ? '#fff' : '#000'};
  cursor: pointer;
  &:hover {
    background: tomato;
  };
`;

const App = () => {
  const [ativo, setAtivo] = React.useState(false);

  function handleClick() {
    setAtivo(!ativo)
  }

  return (
    <div>
      <Comprar ativo={ativo} onClick={handleClick}>Compre aqui</Comprar>
      <ProdutosContainer>
        <Produto>
          <Title>Notebook</Title>
          <Paragrafo>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
            quidem quaerat quis quasi esse voluptas.
          </Paragrafo>
          <Preco cor='#53b'>R$1000</Preco>
        </Produto>
        <Produto>
          <Title>Smartphone</Title>
          <Paragrafo>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
            quidem quaerat quis quasi esse voluptas.
          </Paragrafo>
          <Preco cor='#53d956' >R$2000</Preco>
        </Produto>
      </ProdutosContainer>
    </div>
  );
};

export default App;
