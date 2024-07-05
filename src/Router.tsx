import { createBrowserRouter } from 'react-router-dom';
import Coins from './screens/Coins';
import Coin from './screens/Coin';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Coins />,
  },
  {
    path: '/:coinId',
    element: <Coin />,
  },
]);

export default router;
