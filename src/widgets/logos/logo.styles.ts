import styled from 'styled-components';
import { motion, Variants } from 'framer-motion';

export const Logo = styled(motion.svg)`
  margin-right: 3rem;
  width: 120px;
`;

export const logoVariants: Variants = {
  initial: {
    fill: 'rgba(216, 31, 38, 0)',
  },
  visible: {
    fill: 'rgba(216, 31, 38, 1)',
  },
};
