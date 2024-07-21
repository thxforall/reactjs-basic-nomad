import { AnimatePresence } from 'framer-motion';
import {
  HeaderWrapper,
  NavList,
  NavListItem,
  Navigator,
} from './header.styles';
import { Link, useMatch } from 'react-router-dom';

const Header = () => {
  const homePathMatch = useMatch('/');
  const upComingPathMatch = useMatch('/coming-soon');
  const nowPathMatch = useMatch('/now-playing');

  return (
    <HeaderWrapper>
      <NavList>
        <AnimatePresence>
          <Link to="/">
            <NavListItem pathMatch={!homePathMatch}>
              POPULAR
              {homePathMatch && <Navigator layoutId="navigator" />}
            </NavListItem>
          </Link>
          <Link to="/coming-soon">
            <NavListItem pathMatch={!upComingPathMatch}>
              COMMING SOON
              {upComingPathMatch && <Navigator layoutId="navigator" />}
            </NavListItem>
          </Link>
          <Link to="/now-playing">
            <NavListItem pathMatch={!nowPathMatch}>
              NOW PLAYING
              {nowPathMatch && <Navigator layoutId="navigator" />}
            </NavListItem>
          </Link>
        </AnimatePresence>
      </NavList>
    </HeaderWrapper>
  );
};

export default Header;
