import { useState } from 'react';
import {
  SlideBox,
  SlideRow,
  SlideRowVar,
  SlidesWrapper,
} from './slides.styles';
import { AnimatePresence } from 'framer-motion';
import { useNowPlayingMovies } from 'features/movie/hooks';
import { makeImgPath } from 'features/movie/utils';

const Slides = () => {
  const { data } = useNowPlayingMovies();
  const [slideIndex, setSlideIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);

  const toggleLeaving = () => setLeaving((prev) => !prev);

  const increaseIndex = () => {
    if (data) {
      if (leaving) return;
      toggleLeaving();
      const toatalMovies = data?.results.length - 1;
      const maxIndex = Math.floor(toatalMovies / OFFSET) - 1;
      setSlideIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };

  const OFFSET = 6;

  return (
    <SlidesWrapper onClick={increaseIndex}>
      <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
        {[...Array(3)].map((_, i) => (
          <SlideRow
            variants={SlideRowVar}
            initial="hidden"
            animate="visible"
            exit="exit"
            key={`slideIndex-${slideIndex}-${i}`}
            transition={{ type: 'tween', duration: 1 }}
          >
            {data?.results
              .slice(1)
              .slice(OFFSET * slideIndex, OFFSET * slideIndex + OFFSET)
              .map((movie) => (
                <SlideBox
                  key={movie.id}
                  bgPhoto={makeImgPath(movie.backdrop_path, 'w500')}
                >
                  {movie.title}
                </SlideBox>
              ))}
          </SlideRow>
        ))}
      </AnimatePresence>
    </SlidesWrapper>
  );
};

export default Slides;
