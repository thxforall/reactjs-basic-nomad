import Header from 'widgets/header/Header';
import { useNowPlayingMovies } from '../features/movie/hooks';
import TextSpinnerLoader from 'widgets/loading/Loading';
import { Main } from './shared.styles';
import Banner from 'widgets/banner/Banner';
import Slides from 'widgets/slides/Slides';

const Home = () => {
  const { isLoading } = useNowPlayingMovies();

  return (
    <>
      <Header />
      <Main>
        {isLoading ? (
          <TextSpinnerLoader />
        ) : (
          <>
            <Banner />
            <Slides />
          </>
        )}
      </Main>
    </>
  );
};

export default Home;
