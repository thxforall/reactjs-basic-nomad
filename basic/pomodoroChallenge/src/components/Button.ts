import { motion } from 'framer-motion';
import styled from 'styled-components';
import { theme } from '../shared/styles/theme';

export const ButtonContainer = styled.section`
  margin-top: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 15%;
`;

export const Button = styled(motion.div)`
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.color.section};
  border-radius: 50%;
  text-align: center;
  box-shadow: ${theme.shadow.medium};
  opacity: 0.6;
  svg {
    width: 50%;
  }
`;
