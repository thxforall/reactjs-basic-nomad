import React, { useState } from 'react';

const App: React.FC = () => {
  const [value, setValue] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <>
      <div>
        <form>
          <input
            value={value}
            type="text"
            placeholder="username"
            onChange={onChange}
          />
          <button type="submit">Log in</button>
        </form>
      </div>
    </>
  );
};

export default App;
