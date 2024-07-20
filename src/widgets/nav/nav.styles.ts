import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const NavItems = styled.ul`
  display: grid;
  grid-template-columns: 0.5fr 0.5fr auto;
`;

export const NavItem = styled(motion.li)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  margin: ${(props) => props.theme.size.space[6]};
`;

export const navItemVariants = {
  initial: {
    scale: 1,
  },
  animate: (isTrue: boolean) => ({
    scale: isTrue ? 1.2 : 1,
  }),
};

export const Circle = styled(motion.span)`
  position: absolute;
  width: 0.3rem;
  height: 0.3rem;
  border-radius: 50%;
  bottom: -8px;
  background-color: ${(props) => props.theme.color.text};
`;
