const API_KEY = process.env.MOVIE_APP_API_KEY;
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

export const getMovies = async (): Promise<IGetMoviesResult> => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/now_playing?api_key=${API_KEY}/language=en-US&page=1`,
      options
    );
    if (!response.ok) {
      throw new Error('API response was not ok');
    }
    const data: IGetMoviesResult = await response.json();
    await new Promise((resolve) => setTimeout(resolve, 3000));

    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};
