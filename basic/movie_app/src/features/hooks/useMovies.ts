import {
  getPopularMovies,
  getUpComingMovies,
  getNowPlayingMovies,
  IGetMoviesResult,
  IGetMovieDetail,
  getMovieById,
} from '../../api';
import { useQuery } from 'react-query';

export const usePopularMovies = () => {
  return useQuery<IGetMoviesResult>(['movies', 'popular'], getPopularMovies);
};

export const useUpComingMovies = () => {
  return useQuery<IGetMoviesResult>(['movies', 'upcoming'], getUpComingMovies);
};

export const useNowPlayingMovies = () => {
  return useQuery<IGetMoviesResult>(
    ['movies', 'nowPlaying'],
    getNowPlayingMovies
  );
};

export const useMovieById = (movieId: number) => {
  return useQuery<IGetMovieDetail>(['movies', 'detail', movieId], () =>
    getMovieById(movieId)
  );
};
