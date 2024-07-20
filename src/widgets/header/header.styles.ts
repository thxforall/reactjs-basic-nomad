import styled from 'styled-components';
import { motion, Variants } from 'framer-motion';

export const HeaderWrapper = styled(motion.header)`
  position: fixed;
  display: grid;
  grid-template-columns: 1fr 5fr;
  width: 100%;
  height: 80px;
  top: 0;
  background-color: ${(props) => props.theme.color.background};
  font-size: 1rem;
  padding: 0 24px;
`;

export const headerVar: Variants = {
  initial: (custom: { isDarkMode: boolean }) => {
    const backgroundColor = custom.isDarkMode
      ? `rgba(20, 20, 20, 0)`
      : `rgba(255, 255, 255, 0)`;
    return {
      backgroundColor,
    };
  },
  scroll: (custom: { opacity: number; isDarkMode: boolean }) => {
    const backgroundColor = custom.isDarkMode
      ? `rgba(20, 20, 20, ${custom.opacity})`
      : `rgba(255, 255, 255, ${custom.opacity})`;
    return {
      backgroundColor,
    };
  },
};

export const HeaderCol = styled.div`
  display: flex;
  align-items: center;
`;
