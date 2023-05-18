import React from 'react';

const App = () => {

  const [textarea, setTextarea] = React.useState('');

  return <form>
    <textarea
      rows="5"
      value={textarea}
      onChange={({target}) => setTextarea(target.value)}
    />
    {textarea}
  </form>;
};

export default App;
