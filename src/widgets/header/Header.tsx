import { HeaderWrapper, HeaderCol, headerVar } from './header.styles';
import NavWrapper from '../nav/Nav';
import LogoWrapper from 'widgets/logos/Logo';
import {
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useState } from 'react';
// import { useEffect } from 'react';

const Header = () => {
  const { scrollY } = useScroll();
  const backgroundOpacity = useTransform(scrollY, [0, 50], [0, 1]);
  const [scrollOpacity, setScrollOpacity] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useMotionValueEvent(scrollY, 'change', () => {
    setScrollOpacity(backgroundOpacity.get());
    return setIsDarkMode;
  });

  // recoil darkmode 판독하여 배경값 바꾸기
  // useEffect(() => {}, []);

  return (
    <AnimatePresence custom={{ opacity: scrollOpacity, isDarkMode }}>
      <HeaderWrapper
        custom={{ opacity: scrollOpacity, isDarkMode }}
        variants={headerVar}
        initial="initial"
        animate="scroll"
      >
        <HeaderCol>
          <LogoWrapper />
        </HeaderCol>
        <HeaderCol>
          <NavWrapper />
        </HeaderCol>
      </HeaderWrapper>
    </AnimatePresence>
  );
};

export default Header;
