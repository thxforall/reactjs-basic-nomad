import React from 'react';
import Circle from './Cirscles';

const App: React.FC = () => {
  return (
    <>
      <Circle bgColor="teal" text='Teal'/>
      <Circle bgColor="tomato" borderColor="black" />
    </>
  );
};

export default App;
