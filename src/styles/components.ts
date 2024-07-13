import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 120vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  align-items: center;
`;

export const Grid = styled.div`
  padding: 1rem;
  place-self: center;
`;

export const BigContainer = styled.div`
  grid-column: 2 / 5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  height: 100%;
  padding: 2rem 1rem;
`;

export const GiantContainer = styled.div`
  grid-column: 1 / -1;
  grid-row: 3 / 5;
  width: 100%;
  height: 100%;
  padding: 2rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 18px;
`;

export const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  border-radius: 22px;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  overflow: hidden;
`;

export const MiddleContainer = styled(Container)`
  width: 400px;
  height: 200px;
  border-radius: 32px;
  position: absolute;
  z-index: -1;
  font-size: 5rem;
  font-weight: 500;
`;

export const Button = styled.button``;

export const CircleContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: rgba(255, 255, 255, 0.2);
`;

export const Shape = styled(motion.div)`
  width: 80px;
  height: 80px;
`;

export const Circle = styled(Shape)`
  background-color: white;
  place-self: center;
  border-radius: 50%;
`;

export const DragShape = styled(Shape)`
  background-color: tomato;
  border-radius: 50%;
`;

export const ScrollShape = styled(Shape)`
  width: 100%;
  height: 100%;
  background-color: tomato;
`;

export const Svg = styled(motion.svg)`
  width: 150px;
  height: 150px;
  path {
    stroke: rgb(0, 0, 0);
    stroke-width: 10;
    fill: transparent;
  }
`;
