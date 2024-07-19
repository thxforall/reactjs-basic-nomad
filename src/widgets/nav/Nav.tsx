import SearchBarWrapper from 'widgets/searchBar/SearchBar';
import { Circle, Nav, NavItem, NavItems } from './nav.styles';
import { Link, useMatch } from 'react-router-dom';

const NavWrapper = () => {
  const homePathMatch = useMatch('/');
  const moviePathMatch = useMatch('movie');

  return (
    <Nav>
      <NavItems>
        <NavItem>
          <Link to="/">Home</Link>
          <Circle />
        </NavItem>
        <NavItem>
          <Link to="movie">Movie</Link>
          <Circle />
        </NavItem>
      </NavItems>
      <SearchBarWrapper />
    </Nav>
  );
};

export default NavWrapper;
