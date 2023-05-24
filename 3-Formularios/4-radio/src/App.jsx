import React from 'react';

const App = () => {

  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');

  function handleChange({target}) {
    setProduto(target.value)
  }

  return <form>
    <h2>Cores</h2>
    <label>
      <input 
      type="radio"
      value="azul"
      checked={cor === 'azul'}
      onChange={({target}) => setCor(target.value)}
      />
    Azul</label>

    <label>
      <input 
      type="radio"
      value='vermelho'
      checked={cor === 'vermelho'}
      onChange={({target}) => setCor(target.value)}
      />
    Vermelho</label>
    {cor}
    <h2>Produtos</h2>
    <label> 
      <input
      type="radio"
      value="smartphone"
      name="produto"
      checked={produto === 'smartphone'}
      onChange={handleChange}
       />
    Smartphone</label>

    <label> 
      <input
      type="radio"
      value= "notebook"
      name="produto"
      checked={produto === 'notebook'}
      onChange={handleChange}
       />
    Notebook</label>
    {produto}
  </form>
 
};

export default App;
