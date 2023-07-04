import React from 'react';
const Contato = React.lazy(() => import('./Contato'));

const App = () => {
  return (
    <div>
      <Contato />
    </div>
  );
};

export default App;
