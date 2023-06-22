import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Esta é a página inicial.</p>
      <Link to='produtos/notebook' >Notebook</Link>
      {' | '}
      <Link to='produtos/tablet' >Tablet</Link>

    </div>
  )
}

export default Home