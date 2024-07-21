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

export const SlideBoxVar: Variants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.2,
    y: -50,
    transition: {
      delay: 0.4,
      duration: 0.3,
      type: 'tween',
    },
  },
};

export const SlideBox = styled(motion.div)<{ bgPhoto: string }>`
  background-image: url(${(props) => props.bgPhoto});
  background-size: cover;
  background-position: center;
  height: 200px;
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;

  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`;

export const BoxInfo = styled(motion.div)`
  position: absolute;
  width: 100%;
  bottom: 0;
  opacity: 0;
  padding: 18px;
  background-color: ${(props) => props.theme.color.background};
  h4 {
    font-size: 1.2rem;
    text-align: center;
  }
`;

export const Modal = styled(motion.div)<{ scrollY: number }>`
  position: fixed;
  width: 60vw;
  height: 70vh;
  background-color: white;
  top: ${(props) => props.scrollY + 190}px;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

export const infoVar: Variants = {
  hover: {
    opacity: 1,
    transition: {
      delay: 0.4,
      duration: 0.3,
      type: 'tween',
    },
  },
};

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
`;
