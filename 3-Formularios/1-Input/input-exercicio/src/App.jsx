import React from 'react';

// Faça um fetch (POST) para a API abaixo
// Para a criação ser aceita é necessário enviar dodos de:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado

// Essa é a função utilizado para realizar o POST

// Mostre uma mensagem na tela, caso a resposta da API seja positiva

const formFields = [
  {
    id: 'nome',
    label: 'Nome',
    type: 'text',
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email',
  },
  {
    id: 'senha',
    label: 'Senha',
    type: 'password',
  },
  {
    id: 'cep',
    label: 'Cep',
    type: 'text',
  },
  {
    id: 'rua',
    label: 'Rua',
    type: 'text',
  },
  {
    id: 'numero',
    label: 'Numero',
    type: 'text',
  },
  {
    id: 'bairro',
    label: 'Bairro',
    type: 'text',
  },
  {
    id: 'cidade',
    label: 'Cidade',
    type: 'text',
  },
  {
    id: 'estado',
    label: 'Estado',
    type: 'text',
  },
];

const App = () => {
  const [form, setForm] = React.useState(
    formFields.reduce((acc, field) => {
      return {
        ...acc,
        [field.id]: '',
      };
    }, {})
  );

  const [response, setResponse] = React.useState(null);

  React.useEffect(() => {
    let timeOutId = null;
    if (response && response.ok) {
      timeOutId = setTimeout(() => {
        setResponse(null);
      }, 3000);
    }   
    return () => clearTimeout(timeOutId);
  }, [response]);

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // form é o objeto com os dados do formulário
      body: JSON.stringify(form),
    }).then(response => setResponse(response));
  }

  return (
    <form onSubmit={handleSubmit}>
      {formFields.map((field) => (
        <div key={field.id}>
          <label htmlFor={field.id}>{field.label}</label>
          <input
            id={field.id}
            type={field.type}
            value={form[field.id]}
            onChange={handleChange}
          />
        </div>
      ))}

        {response && response.ok && <p>Formulário enviado!</p> }
      <button>Enviar</button>
    </form>
  );
};

export default App;
