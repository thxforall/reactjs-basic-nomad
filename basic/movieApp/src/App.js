import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Detail from './routes/Detail';
import Navigation from './components/Navigation';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.appContainer}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;