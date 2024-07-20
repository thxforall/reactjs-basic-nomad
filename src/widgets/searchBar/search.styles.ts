import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const SearchBarVar = {
  initial: {
    scaleX: 0,
  },
  visible: {
    scaleX: 1,
  },
  exit: {
    scaleX: 0,
  },
};

export const SearchBar = styled(motion.input)`
  transform-origin: right center;
  background-color: ${(props) => props.theme.color.background};
  border: 1px solid ${(props) => props.theme.color.text};
  padding: 0.5rem 1rem;
`;

export const SearchSVG = styled.svg`
  width: 1.1rem;
  fill: ${(props) => props.theme.color.text};
`;
