import { useState, useEffect } from 'react';

const Hello = () => {
  useEffect(() => {
    console.log(`I'm here`);
    return () => console.log('Bye!!');
  }, []);
  return <h1>Hello!!</h1>;
};

function App() {
  const [showing, setShowing] = useState('false');

  const toggleShowing = () => {
    setShowing((prev) => !prev);
  };

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={toggleShowing}>{showing ? 'Hide' : 'Show'}</button>
    </div>
  );
}

export default App;
