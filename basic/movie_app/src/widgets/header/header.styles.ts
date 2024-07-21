import { motion } from 'framer-motion';
import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 2rem;
  font-weight: 700;
  color: ${(props) => props.theme.color.text};
  margin-bottom: 48px;
`;

export const NavList = styled(motion.ul)`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const NavListItem = styled(motion.li)<{ pathMatch: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
  opacity: ${(props) => (props.pathMatch ? 0.2 : 1)};
`;

export const Navigator = styled(motion.span)`
  width: 0.3rem;
  height: 0.3rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme.color.primaryLight};
`;
