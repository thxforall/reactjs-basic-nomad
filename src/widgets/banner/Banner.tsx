import { AnimatePresence } from 'framer-motion';
import { makeImgPath } from 'features/movie/utils';
import { BannerWrapper, Title, Overview } from './banner.styles';
import { useNowPlayingMovies } from '../../features/movie/hooks';

const Banner = () => {
  const { data } = useNowPlayingMovies();

  return (
    <>
      <AnimatePresence>
        <BannerWrapper
          bgPhoto={makeImgPath(data?.results[0].backdrop_path || '')}
        >
          <Title>{data?.results[0].title}</Title>
          <Overview>{data?.results[0].overview}</Overview>
        </BannerWrapper>
      </AnimatePresence>
    </>
  );
};

export default Banner;
