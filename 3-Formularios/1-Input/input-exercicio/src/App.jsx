import React from 'react';

// Faça um fetch (POST) para a API abaixo
// Para a criação ser aceita é necessário enviar dodos de:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado

// Essa é a função utilizado para realizar o POST

// Mostre uma mensagem na tela, caso a resposta da API seja positiva

const App = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [cep, setCep] = React.useState('');
  const [rua, setRua] = React.useState('');
  const [numero, setNumero] = React.useState('');
  const [bairro, setBairro] = React.useState('');
  const [cidade, setCidade] = React.useState('');
  const [estado, setEstado] = React.useState('');

  const [response, setResponse] = React.useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // form é o objeto com os dados do formulário
      body: JSON.stringify(nome, email, senha),
    }).then(response => setResponse(response));
  }
  console.log(response, nome)

  return (
    <form id="form" onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input id="nome" type="text" name="nome" value={nome} onChange={({target}) => setNome(target.value)} />

      <label htmlFor="email">Email</label>
      <input id="email" type="email" name="email" value={email} onChange={({target}) => setEmail(target.value)} />

      <label htmlFor="senha">Senha</label>
      <input id="senha" type="password" name="senha" value={senha} onChange={({target}) => setSenha(target.value)} />

      <label htmlFor="cep">CEP</label>
      <input id="cep" type="text" name="cep" value={cep} onChange={({target}) => setCep(target.value)} />

      <label htmlFor="rua">Rua</label>
      <input id="rua" type="text" name="rua" value={rua} onChange={({target}) => setRua(target.value)} />

      <label htmlFor="numero">Numero</label>
      <input id="numero" type="text" name="numero" value={numero} onChange={({target}) => setNumero(target.value)} />

      <label htmlFor="bairro">Bairro</label>
      <input id="bairro" type="text" name="bairro" value={bairro} onChange={({target}) => setBairro(target.value)} />

      <label htmlFor="cidade">Cidade</label>
      <input id="cidade" type="text" name="cidade" value={cidade} onChange={({target}) => setCidade(target.value)} />

      <label htmlFor="estado">Estado</label>
      <input id="estado" type="text" name="estado" value={estado} onChange={({target}) => setEstado(target.value)} />
      {response && response.ok && <p>formulário enviado</p> }
      <button>Enviar</button>
    </form>
  );
};

export default App;
