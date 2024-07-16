import { motion } from 'framer-motion';
import styled from 'styled-components';
import { theme } from '../shared/styles/theme';

export const TimerContainer = styled.section`
  margin-top: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20%;
  gap: 32px;
`;

const TimerBox = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 300px;
  background-color: ${theme.color.section};
  border-radius: ${theme.radius.medium};
  box-shadow: ${theme.shadow.medium};
  font-size: 6rem;
`;

export const TimerMinute = styled(TimerBox)``;

export const TimerColoneContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 12px;
`;

export const Colone = styled.div`
  width: 16px;
  height: 16px;
  background-color: ${theme.color.section};
  border-radius: 50%;
  opacity: 0.6;
`;

export const TimerSecond = styled(TimerBox)``;

export const timerVariant = {
  initial: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
};
