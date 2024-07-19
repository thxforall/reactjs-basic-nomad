import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: grid;
  grid-template-columns: 1fr 5fr;
  width: 100%;
  height: 80px;
  top: 0;
  background-color: ${(props) => props.theme.color.background};
  font-size: 1rem;
  padding: 0 24px;
`;

export const HeaderCol = styled.div`
  display: flex;
  align-items: center;
`;
