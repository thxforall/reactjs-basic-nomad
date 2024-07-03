import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Movie.module.scss';

function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <div className={styles.movie}>
      <Link
        to={{
          pathname: `/movie/${id}`,
          state: {
            year,
            title,
            summary,
            poster,
            genres,
          },
        }}
        className={styles.link}
      >
        <img src={poster} alt={title} title={title} className={styles.img} />
        <div className={styles.movieData}>
          <h3 className={styles.movieTitle}>{title}</h3>
          <h5 className={styles.movieYear}>{year}</h5>
          <ul className={styles.movieGenres}>
            {genres.map((genre, index) => (
              <li key={index} className={styles.genre}>
                {genre}
              </li>
            ))}
          </ul>
          <p className={styles.movieSummary}>{summary.slice(0, 180)}...</p>
        </div>
      </Link>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;