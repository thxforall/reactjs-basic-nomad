import { useState } from 'react';
import styled from 'styled-components';

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

const Container = styled.div<CircleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  background-color: ${(props) => props.bgColor};
  border: 1px solid ${(props) => props.borderColor};
`;

const Circle = ({
  bgColor,
  borderColor,
  text = 'default text',
}: CircleProps) => {
  const [counter, setCounter] = useState<number>(0);

  const handleCounter = () => setCounter((counter) => counter++);

  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
};

export default Circle;
