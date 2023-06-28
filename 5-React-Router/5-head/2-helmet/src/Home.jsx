import React from 'react';
import { Link } from 'react-router-dom';
import Head from './Head';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Nome do Site | Home</title>
        <meta name="description" content="página Home" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossOrigin="anonymous"></link>
      </Helmet>
      <h1>Home</h1>
      <p>Essa é a Home</p>
      <Link to='produto/notebook'>Notebook</Link>
      {' '} | {' '}
      <Link to='produto/smartphone' >Smartphone</Link>
    </div>
  )
}

export default Home;