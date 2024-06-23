import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const [movieDetail, setMovieDetail] = useState([]);

  const { id } = useParams();
  const getMovieDetail = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    setMovieDetail(json.data.movie);
  };

  useEffect(() => {
    getMovieDetail();
  }, []);

  console.log(movieDetail);

  return (
    <h1>{movieDetail.title}</h1>
  );
};
export default Detail;
