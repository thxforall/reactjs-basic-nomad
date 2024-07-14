import { Wrapper, Container, Grid, Overlay, Modal } from './styles/components';
import GlobalStyle from './styles/GlobalStyle';
import { useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useTransform,
} from 'framer-motion';
import { overlayVars } from 'styles/animate';

const App = () => {
  const [overlay, setOverlay] = useState(false);

  const toggleOverlay = () => {
    setOverlay((prev) => !prev);
  };

  const [id, setId] = useState<null | string>(null);
  console.log(id);
  return (
    <>
      <Wrapper onClick={toggleOverlay}>
        <Grid>
          {[...Array(4)].map((_, i) => (
            <Container
              onClick={() => setId(i.toString())}
              layoutId={`modal${i}`}
              key={i}
            >
              {i + 1}
            </Container>
          ))}
        </Grid>
        <AnimatePresence>
          {id ? (
            <Overlay
              onClick={() => setId(null)}
              variants={overlayVars}
              initial="initial"
              animate="visible"
              exit="exit"
            >
              <Modal layoutId={`modal${id}`}>{+id + 1}</Modal>
            </Overlay>
          ) : null}
        </AnimatePresence>
      </Wrapper>
    </>
  );
};

export default App;
