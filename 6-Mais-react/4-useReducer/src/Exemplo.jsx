import React from 'react';

function reducer(state, action) {
  switch(action.type) {
    case 'REMOVER':
      return state.filter(item => item !== action.content);
    case 'ADICIONAR':
      return [...state, action.content];
    default:
      throw new Error();    
  }
}

const Exemplo = () => {

const [state, dispatch] = React.useReducer(reducer, ['banana', ' uva'])

  return (
    <div>
      <button onClick={() => dispatch({ type: 'REMOVER', content: 'banana' })} >Remover banana</button>
      <button onClick={() => dispatch( { type:'ADICIONAR', content:' limão' })} >Adicionar limão</button>
      <p>{state}</p>
    </div>
  )
}

export default Exemplo