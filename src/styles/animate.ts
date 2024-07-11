export const boxVariants = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

export const circleVariants = {
  start: {
    opacity: 0,
    y: 10,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};

export const hoverVariants = {
  hover: {
    rotateZ: 180,
    scale: 1.02,
  },
  tap: {
    borderRadius: '50%',
  },
};

export const dragVariants = {
  drag: {
    backgroundColor: 'rgba(26,204,113,0.2)',
    transition: { duration: 5 },
  },
};

export const pathVariants = {
  start: { fill: 'rgba(255, 255, 255, 0)', pathLength: 0 },
  end: {
    fill: 'rgba(255, 255, 255, 0.553)',
    pathLength: 1,
  },
};
