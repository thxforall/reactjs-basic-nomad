import { Box, Circle, Wrapper } from './styles/components';
import GlobalStyle from './styles/GlobalStyle';
import { boxVariants, circleVariants } from './styles/animate';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Box variants={boxVariants} initial="start" animate="end">
          {[...Array(4)].map((_, i) => (
            <Circle key={i} variants={circleVariants} />
          ))}
        </Box>
      </Wrapper>
    </>
  );
};

export default App;
