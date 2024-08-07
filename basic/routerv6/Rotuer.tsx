import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import About from './screens/About';
import Home from './screens/Home';
import User from './screens/users/User';
import NotFound from './screens/NotFound';
import ErrorComponent from './components/ErrorComponents';
import Followers from './screens/users/Followers';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Home />,
        errorElement: <ErrorComponent />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: 'users/:userId',
        element: <User />,
        children: [{ path: 'followers', element: <Followers /> }],
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
