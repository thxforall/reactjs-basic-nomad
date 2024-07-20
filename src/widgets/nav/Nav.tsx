import SearchBarWrapper from 'widgets/searchBar/SearchBar';
import { Circle, Nav, NavItem, NavItems, navItemVariants } from './nav.styles';
import { Link, useMatch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const NavWrapper = () => {
  const homePathMatch = useMatch('/');
  const moviePathMatch = useMatch('movie');

  return (
    <Nav>
      <NavItems>
        <AnimatePresence custom={homePathMatch}>
          <NavItem
            custom={homePathMatch}
            variants={navItemVariants}
            animate="animate"
          >
            <Link to="/">Home</Link>
            {homePathMatch && <Circle layoutId="circle" />}
          </NavItem>
        </AnimatePresence>
        <AnimatePresence custom={moviePathMatch}>
          <NavItem
            custom={moviePathMatch}
            variants={navItemVariants}
            initial="initial"
            animate="animate"
          >
            <Link to="movie">Movie</Link>
            {moviePathMatch && <Circle layoutId="circle" />}
          </NavItem>
        </AnimatePresence>
      </NavItems>
      <SearchBarWrapper />
    </Nav>
  );
};

export default NavWrapper;
