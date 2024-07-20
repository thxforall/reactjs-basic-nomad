import { getMovies, IGetMoviesResult } from './api';
import { useQuery } from 'react-query';

export const useNowPlayingMovies = () => {
  return useQuery<IGetMoviesResult>(['movies', 'nowPlaying'], getMovies);
};
