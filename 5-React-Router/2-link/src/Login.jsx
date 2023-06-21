import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  function handleClick() {
    console.log('fazer login');
    navigate('/sobre')
  }

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleClick} style={{marginTop:'16px', padding: '8px 16px'}} >Login</button>
    </div>
  )
}

export default Login