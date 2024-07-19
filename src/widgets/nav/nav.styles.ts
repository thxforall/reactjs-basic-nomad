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

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  margin: ${(props) => props.theme.size.space[6]};
  &:hover {
  }
`;

export const Circle = styled.span`
  position: absolute;
  width: 0.3rem;
  height: 0.3rem;
  border-radius: 50%;
  bottom: -10px;
  background-color: ${(props) => props.theme.color.text};
`;
