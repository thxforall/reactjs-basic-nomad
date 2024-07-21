const API_KEY = process.env.VITE_MOVIE_API_KEY;
const BASE_URL = `https://api.themoviedb.org/3`;

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNGM2YmQwYTI4NTA2OTNiZjY5YTEwMWYzMTdmOTQ1MCIsIm5iZiI6MTcyMTQ5NTY5OC40MDA0MDEsInN1YiI6IjY2OTdkMzgzNmVlNTNjYmI0NTIyZTUyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g0jStKY6c_qh_2BBFpZ88CM0tLXEJAhBdSbxocbEA9w',
  },
};

interface IMovie {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
}

export interface IGetMoviesResult {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

interface IGenres {
  id: number;
  name: string;
}

interface ICompany {
  id: number;
  logo_path: string | null;
  name: string;
}

export interface IGetMovieDetail {
  id: number;
  title: string;
  backdrop_path: string;
  budget: number;
  genres: IGenres[];
  overview: string;
  production_companies: ICompany[];
  tagline: string;
  vote_average: number;
  vote_count: number;
  release_date:string;
}

export const getPopularMovies = async (): Promise<IGetMoviesResult> => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}?language=en-US&page=1`,
      options
    );
    if (!response.ok) {
      throw new Error('API response was not ok');
    }
    const data: IGetMoviesResult = await response.json();
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

export const getUpComingMovies = async (): Promise<IGetMoviesResult> => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/upcoming?api_key=${API_KEY}?language=en-US&page=1`,
      options
    );
    if (!response.ok) {
      throw new Error('API response was not ok');
    }
    const data: IGetMoviesResult = await response.json();
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

export const getNowPlayingMovies = async (): Promise<IGetMoviesResult> => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/now_playing?api_key=${API_KEY}?language=en-US&page=1`,
      options
    );
    if (!response.ok) {
      throw new Error('API response was not ok');
    }
    const data: IGetMoviesResult = await response.json();
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

export const getMovieById = async (
  movieId: number
): Promise<IGetMovieDetail> => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}?language=en-US&page=1`,
      options
    );
    if (!response.ok) {
      throw new Error('API response was not ok');
    }
    const data: IGetMovieDetail = await response.json();
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

export function makeImagePath(image: string) {
  return `https://image.tmdb.org/t/p/w500${image}`;
}

export function makeBgPath(image: string) {
  return `https://image.tmdb.org/t/p/original${image}`;
}
