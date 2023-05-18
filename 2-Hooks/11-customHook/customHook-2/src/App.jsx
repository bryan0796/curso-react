import React from 'react';
import useFetch from './useFetch';

const App = () => {
  const { request, data, loading, error } = useFetch();

  React.useEffect(() => {
    async function fetchData() {
      const {response, json} = await request('https://ranekapi.origamid.dev/json/api/produto/')
    }
    fetchData();
  }, [request]);
  console.log(error)

  if (error) return <p>{error}</p>
  if (loading) return <p>Carregando...</p>;
  if (data)
    return (
      <div>
        {data.map((produto) => {
          return (
            <div key={produto.id}>
              <h1>{produto.nome}</h1>
            </div>
          );
        })}
      </div>
    );
  else return null;  
};

export default App;
