import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Overlay = styled(motion.div)`
  width: 120%;
  height: 120%;
  background-color: rgba(0, 0, 0, 1);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  align-items: center;
  width: 50vw;
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
  gap: 24px;
`;

export const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  border-radius: 32px;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  overflow: hidden;
`;

export const Modal = styled(Container)`
  width: 400px;
  height: 200px;
`;
