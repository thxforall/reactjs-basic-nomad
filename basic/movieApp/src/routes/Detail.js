import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './Detail.module.scss';

const Detail = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!location.state || !location.state.title) {
      navigate('/');
    }
  }, [location, navigate]);

  if (!location.state || !location.state.title) {
    return null;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{location.state.title}</h1>
    </div>
  );
};

export default Detail;