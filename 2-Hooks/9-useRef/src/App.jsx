import React from 'react';

const App = () => {
  const [comentarios, setComentarios] = React.useState([]);
  const [input, setInput] = React.useState('');
  const inputElement = React.useRef();

  function handleClick() {
    setComentarios(comentarios => [...comentarios, input]);
    setInput('');
    inputElement.current.focus();
  }

  function apagar() {
    comentarios.pop()
  }

  console.log(comentarios)
  return(
  <div>
    <ul>
      
      {comentarios.map(comentario => {
        return <li key={comentario}>{comentario}</li>
      })}
    </ul>
    <input
      type="text"
      value={input}
      ref={inputElement}
      onChange={({target}) => setInput(target.value)} 
    />
    <br />
    <button onClick={handleClick}>Enviar</button>
    <button style={{margin: '8px'}} onClick={apagar}>Apagar</button>
  </div>
  )
};

export default App;
