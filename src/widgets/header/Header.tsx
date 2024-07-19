import { HeaderWrapper, HeaderCol } from './header.styles';
import NavWrapper from '../nav/Nav';
import LogoWrapper from 'widgets/logos/Logo';

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderCol>
        <LogoWrapper />
      </HeaderCol>
      <HeaderCol>
        <NavWrapper />
      </HeaderCol>
    </HeaderWrapper>
  );
};

export default Header;
