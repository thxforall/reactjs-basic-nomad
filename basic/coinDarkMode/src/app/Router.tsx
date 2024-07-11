import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Coins from '../features/coin/routes/Coins';
import Coin from '../features/coin/components/Coin';
import Chart from '../features/coin/components/Chart';
import Price from '../features/coin/components/Price';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Coins />,
    children: [
      {
        path: ':coinId',
        element: <Coin />,
        children: [
          {
            path: 'chart',
            element: <Chart />,
          },
          {
            path: 'price',
            element: <Price />,
          },
        ],
      },
    ],
  },
]);

export default router;
