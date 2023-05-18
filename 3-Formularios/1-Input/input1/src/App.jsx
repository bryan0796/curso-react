import React from 'react';

const App = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');


  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input
        id="nome" 
        type="text"
        name="nome"  
        value={nome}
        onChange={({target}) => setNome(target.value)}/>
        <label htmlFor="email">Email</label>
        <input
        id='email' 
        type="text"
        name='email' 
        value={email}
        onChange={({target}) => setEmail(target.value)}
         />
      <button>Enviar</button>
    </form>
    
  );
};

export default App;
