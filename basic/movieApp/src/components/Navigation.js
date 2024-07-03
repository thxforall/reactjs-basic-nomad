import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.scss';

function Navigation() {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.link}>Home</Link>
      <Link to="/about" className={styles.link}>About</Link>
    </nav>
  );
}

export default Navigation;