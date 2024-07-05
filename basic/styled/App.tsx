import React, { useState, ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';

// 명시적으로 props를 정의하지 않는 경우
const App = () => {
  const Container = styled.div`
    background-color: ${(props) => props.theme.bgColor};
  `;
  const H1 = styled.h1`
    color: ${(props) => props.theme.textColor};
  `;

  const [value, setValue] = useState('');

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Submitted:', value);
  };

  return (
    <Container>
      <H1>Hello World</H1>
      <div>
        <form onSubmit={onSubmit}>
          <input
            value={value}
            onChange={onChange}
            type="text"
            placeholder="username"
          />
          <button type="submit">Log in</button>
        </form>
      </div>
    </Container>
  );
};

export default App;
