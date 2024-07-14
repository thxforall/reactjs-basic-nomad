import {
  CircleContainer,
  Circle,
  Wrapper,
  Grid,
  Container,
  DragShape,
  ScrollShape,
  Svg,
  BigContainer,
  MiddleContainer,
  GiantContainer,
  Button,
  BiggerContainer,
} from './styles/components';
import GlobalStyle from './styles/GlobalStyle';
import {
  boxVariants,
  circleVariants,
  dragVariants,
  hoverVariants,
  modalVariants,
  pathVariants,
  slideVariants,
} from './styles/animate';
import { useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useTransform,
} from 'framer-motion';

const App = () => {
  const dragBoxRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const xTransForm = useTransform(x, [-100, 100], [-180, 180]);
  const { scrollY, scrollYProgress } = useScroll();
  const yTransForm = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

  const [showing, setShowing] = useState(false);
  const [slideIndex, setSlideIndex] = useState(1);
  const [back, setBack] = useState(false);

  const toggleShowing = () => setShowing((prev) => !prev);

  const nextSlide = () => {
    setBack(false);
    setSlideIndex((prev) => (prev === 10 ? 10 : prev + 1));
  };

  const prevSlide = () => {
    setBack(true);
    setSlideIndex((prev) => (prev === 1 ? 1 : prev - 1));
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Grid>
          <CircleContainer variants={boxVariants} initial="start" animate="end">
            {[...Array(4)].map((_, i) => (
              <Circle key={i} variants={circleVariants} />
            ))}
          </CircleContainer>
        </Grid>
        <Grid>
          <Container
            variants={hoverVariants}
            whileHover="hover"
            whileTap="tap"
          />
        </Grid>
        <Grid>
          <Container ref={dragBoxRef}>
            <DragShape
              drag
              dragSnapToOrigin
              dragElastic={0.2}
              dragConstraints={dragBoxRef}
              variants={dragVariants}
              whileDrag="drag"
            />
          </Container>
        </Grid>
        <Grid>
          <Container style={{ scale: yTransForm }}>
            <ScrollShape style={{ scale: yTransForm }} />
          </Container>
        </Grid>
        <Grid>
          <Container>
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <motion.path
                variants={pathVariants}
                initial="start"
                animate="end"
                transition={{
                  default: { duration: 5 },
                  fill: { duration: 2, delay: 3 },
                }}
                d="M224 373.1c-25.2-31.7-40.1-59.4-45-83.2-22.6-88 112.6-88 90.1 0-5.5 24.3-20.3 52-45 83.2zm138.2 73.2c-42.1 18.3-83.7-10.9-119.3-50.5 103.9-130.1 46.1-200-18.9-200-54.9 0-85.2 46.5-73.3 100.5 6.9 29.2 25.2 62.4 54.4 99.5-32.5 36.1-60.6 52.7-85.2 54.9-50 7.4-89.1-41.1-71.3-91.1 15.1-39.2 111.7-231.2 115.9-241.6 15.8-30.1 25.6-57.4 59.4-57.4 32.3 0 43.4 25.9 60.4 59.9 36 70.6 89.4 177.5 114.8 239.1 13.2 33.1-1.4 71.3-37 86.6zm47-136.1C280.3 35.9 273.1 32 224 32c-45.5 0-64.9 31.7-84.7 72.8C33.2 317.1 22.9 347.2 22 349.8-3.2 419.1 48.7 480 111.6 480c21.7 0 60.6-6.1 112.4-62.4 58.7 63.8 101.3 62.4 112.4 62.4 62.9 .1 114.9-60.9 89.6-130.2 0-3.9-16.8-38.9-16.8-39.6z"
              />
            </Svg>
          </Container>
        </Grid>
        <BigContainer>
          <AnimatePresence>
            {showing && (
              <MiddleContainer
                variants={modalVariants}
                initial="initial"
                animate="visible"
                exit="exit"
              />
            )}
          </AnimatePresence>
          <Button onClick={toggleShowing}>Click</Button>
        </BigContainer>
        <GiantContainer>
          <AnimatePresence mode="wait" custom={back}>
            <MiddleContainer
              custom={back}
              key={slideIndex}
              variants={slideVariants}
              initial="entry"
              animate="center"
              exit="exit"
            >
              {slideIndex}
            </MiddleContainer>
          </AnimatePresence>
          <Button onClick={nextSlide}>Next</Button>
          <Button onClick={prevSlide}>Prev</Button>
        </GiantContainer>
        <BiggerContainer onClick={toggleShowing}>
          <Container>
            {!showing ? (
              <Circle
                layoutId="circle"
                style={{
                  backgroundColor: 'tomato',
                }}
              />
            ) : null}
          </Container>
          <Container>
            {showing ? (
              <Circle
                layoutId="circle"
                style={{
                  backgroundColor: 'tomato',
                }}
              />
            ) : null}
          </Container>
        </BiggerContainer>
      </Wrapper>
    </>
  );
};

export default App;
