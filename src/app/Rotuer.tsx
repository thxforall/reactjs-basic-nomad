import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import Search from '../pages/Search';
import Movie from '../pages/Movie';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/search',
    element: <Search />,
  },
  {
    path: '/movie',
    element: <Movie />,
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
