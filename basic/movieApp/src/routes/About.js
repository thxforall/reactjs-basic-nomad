import React from 'react';
import styles from './About.module.scss';

function About() {
  return (
    <div className={styles.aboutContainer}>
      <span className={styles.quote}>
        “Freedom is the freedom to say that two plus two make four. If that is
        granted, all else follows.”
      </span>
      <span className={styles.author}>− George Orwell, 1984</span>
    </div>
  );
}

export default About;