import { useState } from 'react';
import {
  BoxInfo,
  infoVar,
  Modal,
  Overlay,
  SlideBox,
  SlideBoxVar,
  SlideRow,
  SlideRowVar,
  SlidesWrapper,
} from './slides.styles';
import { AnimatePresence, useScroll } from 'framer-motion';
import { useNowPlayingMovies } from 'features/movie/hooks';
import { makeImgPath } from 'features/movie/utils';
import { useMatch, useNavigate } from 'react-router-dom';

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

  const navigate = useNavigate();
  const moviePathMatch = useMatch('movie/:movieId');

  const onBoxClicked = (movieId: number) => {
    console.log(moviePathMatch);
    navigate(`/movie/${movieId}`);
  };

  const onOverlayClicked = () => {
    navigate(-1);
  };

  const { scrollY } = useScroll();

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
                  variants={SlideBoxVar}
                  initial="initial"
                  whileHover="hover"
                  transition={{ type: 'tween' }}
                  layoutId={movie.id + ''}
                >
                  <BoxInfo
                    variants={infoVar}
                    onClick={() => onBoxClicked(movie.id)}
                  >
                    <h4>{movie.title}</h4>
                  </BoxInfo>
                </SlideBox>
              ))}
          </SlideRow>
        ))}
      </AnimatePresence>
      <AnimatePresence>
        {moviePathMatch ? (
          <>
            <Overlay onClick={onOverlayClicked} animate={{ opacity: 1 }} />
            <Modal
              layoutId={moviePathMatch.params.movieId}
              scrollY={scrollY.get()}
            ></Modal>
          </>
        ) : null}
      </AnimatePresence>
    </SlidesWrapper>
  );
};

export default Slides;
