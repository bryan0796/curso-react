import React from 'react';
import './App.css';
import imagem from './img/foto.jpg';
import {ReactComponent as Dog} from './img/dog.svg';
import DogSvg from './DogSvg';

const App = () => {
  const [olho, setOlho] = React.useState(0);

  function handleOver() {
    for(let i = 0; i < 6; i++) {
      setTimeout(() => {
        setOlho(i)
      }, 30 * i)
    }
  }

  return (
    <div>
      <Dog style={{display:'block', marginBottom:'16px'}} />
      <DogSvg onMouseOver={handleOver} color='#84e' olho={olho}/>
      <p  className='fundo'></p>
      <img src={imagem} alt="cachorro" />
    </div>
  );
};

export default App;
