import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import DetailPage from '../pages/DetailPage/DetailPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/characters/:id',
    element: <DetailPage />,
  },
]);

export default router;
