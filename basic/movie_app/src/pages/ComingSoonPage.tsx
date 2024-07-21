import { useUpComingMovies } from '../features/hooks/useMovies';
import Header from '../widgets/header/Header';
import Loading from '../widgets/loading/Loading';
import {
  MainWrapper,
  SectionWrapper,
} from '../features/components/main.styles';
import {
  MovieBoxWrapper,
  MovieImgBox,
  MovieTitle,
} from '../widgets/movieBox/movieBox.styles';
import { makeImagePath } from '../api';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate, useMatch, Outlet } from 'react-router-dom';
import MovieModal from '../features/components/MovieModal';

const MainComingSoonPage = () => {
  const { data, isLoading } = useUpComingMovies();

  const navigate = useNavigate();
  const movieIdPathMatch = useMatch('/movie/:movieId');

  const movieDetailOnClicked = (movieId: number) => {
    navigate(`/movie/${movieId}`);
  };

  return (
    <>
      <MainWrapper>
        <Header />
        {isLoading && <Loading />}
        <SectionWrapper>
          {data?.results.map((movie) => (
            <motion.div
              key={movie.id}
              onClick={() => movieDetailOnClicked(movie.id)}
              layoutId={String(movie.id)}
            >
              <MovieBoxWrapper
                whileHover={{
                  scale: 1.2,
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                }}
                transition={{ duration: 0.3 }}
                style={{ display: 'inline-block', overflow: 'hidden' }}
              >
                <MovieImgBox>
                  <motion.img
                    src={makeImagePath(movie.poster_path)}
                    alt={movie.title}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    style={{ display: 'block', width: '100%', height: 'auto' }}
                  />
                </MovieImgBox>
                <MovieTitle>{movie.title}</MovieTitle>
              </MovieBoxWrapper>
            </motion.div>
          ))}
        </SectionWrapper>
        <AnimatePresence>
          {movieIdPathMatch ? <MovieModal /> : null}
        </AnimatePresence>
        <Outlet />
      </MainWrapper>
    </>
  );
};

export default MainComingSoonPage;
