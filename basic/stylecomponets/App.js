import React from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components';

const rotationAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    border-radius: 100px;
  }
  100% {
    transform: rotate(360deg);
    border-radius: 0px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Emoji = styled.span`
  font-size: 3rem;
`;

const Box = styled.div`
  width: 5rem;
  height: 5rem;
  margin-bottom: 2rem;
  background-color: tomato;
  animation: ${rotationAnimation} 2s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover ${Emoji} {
    font-size: 5rem;
  }
`;

const Btn = styled.button`
  width: 12rem;
  height: 3rem;
  padding: 1rem 2rem;
  border-radius: 12px;
  text-align: center;
  background-color: ${(props) => props.theme.btnBackgroundColor};
  color: ${(props) => props.theme.btnTextColor};
  border: none;
  cursor: pointer;
`;

const App: React.FC = () => {
  return (
    <Wrapper>
      <Title>Hello</Title>
      <Box>
        <Emoji>😊</Emoji>
      </Box>
      <Btn>Change Color</Btn>
    </Wrapper>
  );
};

export default App;
