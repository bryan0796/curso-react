import React from 'react';

// Otimize o código do slide anterior
// Utilizando a array abaixo para mostrar
// cada checkbox na tela.

const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

const App = () => {
  const [cores, setCores] = React.useState([]);

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }

  function handleChecked(cor) {
    return cores.includes(cor);
  }
  console.log(cores)

  return (
    <form>
      {coresArray.map(cor => {
        return(
          <label key={cor}>
            <input 
            type="checkbox"
            value= {cor}
            checked={handleChecked(cor)}
            onChange={handleChange}
            />
            {cor[0].toUpperCase() + cor.substring(1)}
          </label>
        )
      })}

      <ul>
        {cores.map((cor) => (
          <li key={cor}>{cor}</li>
        ))}
      </ul>
    </form>
  );
};

export default App;
