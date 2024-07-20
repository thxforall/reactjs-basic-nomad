import styled from 'styled-components';
import { motion, Variants } from 'framer-motion';

export const SlidesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

export const SlideRow = styled(motion.div)`
  width: 100%;
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(6, 1fr);
  position: absolute;
`;

export const SlideRowVar: Variants = {
  hidden: {
    x: window.innerWidth + 8,
  },
  visible: { x: 0 },
  exit: { x: -window.innerWidth - 8 },
};

export const SlideBox = styled(motion.div)<{ bgPhoto: string }>`
  background-image: url(${(props) => props.bgPhoto});
  background-size: cover;
  background-position: center;
  height: 200px;
`;
