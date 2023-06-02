import React from 'react';
import Input from './Form/Input';
import Select from './Form/Select';
import Radio from './Form/Radio';
import Checkbox from './Form/Checkbox';

const App = () => {

  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');
  const [fruta, setFruta] = React.useState('');
  const [linguagens, setLinguagens] = React.useState([]);
  const [termo, setTermo] = React.useState([]);

  if (termo.length > 0) {
    console.log('enviar')
  }

  return (
      <form>
        <h2>Checkbox-Termos</h2>
        <Checkbox options={['Li e aceito os termos.']} value={termo} setValue={setTermo}/>

        <h2>Checkbox-Linguagens</h2>
        <Checkbox options={['Javascript', 'PHP', 'Ruby']} value={linguagens} setValue={setLinguagens}/>

        <h2>Cores-Radio</h2>
        <Radio options={['Azul', 'Vermelho']} value={cor} setValue={setCor} />

        <h2>Frutas-Radio</h2>
        <Radio options={['Laranja', 'Maçã']} value={fruta} setValue={setFruta} />

        <h2>Produtos-Select</h2>
        <Select options={['Smartphone', 'Tablet']} value={produto} setValue={setProduto} />

        <h2>Formulário-Input</h2>
        <Input id='nome' label='Nome' type='text' value={nome} setValue={setNome} required/>
        <Input id='email' label='Email' type='email' value={email} setValue={setEmail} required/>
        <Input id='senha' label='Senha' type='password' value={senha} setValue={setSenha} required/>
        <button>Enviar</button>
      </form>
  );
};

export default App;
