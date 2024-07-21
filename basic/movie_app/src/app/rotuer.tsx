import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import MainHomePage from '../pages/HomePage';
import MainComingSoonPage from '../pages/ComingSoonPage';
import MainNowPlayingPage from '../pages/NowPlayingPage';
import MovieModal from '../features/components/MovieModal';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <MainHomePage />,
        children: [{ path: 'movie/:movieId', element: <MovieModal /> }],
      },
      {
        path: 'coming-soon',
        element: <MainComingSoonPage />,
        children: [{ path: 'movie/:movieId', element: <MovieModal /> }],
      },
      {
        path: 'now-playing',
        element: <MainNowPlayingPage />,
        children: [{ path: 'movie/:movieId', element: <MovieModal /> }],
      },
    ],
  },
]);
