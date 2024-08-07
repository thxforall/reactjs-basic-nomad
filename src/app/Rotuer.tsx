import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import Search from '../pages/Search';

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
    path: '/movie/:movieId',
    element: <Home />,
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
