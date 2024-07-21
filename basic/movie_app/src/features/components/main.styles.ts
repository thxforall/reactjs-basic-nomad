import styled from 'styled-components';

export const MainWrapper = styled.main`
  max-width: 480px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${(props) => props.theme.size.space.bigger}
    ${(props) => props.theme.size.space.normal};
`;

export const SectionWrapper = styled.ul`
  width: 125%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto-fill, 1fr);
  gap: 8px;
`;
