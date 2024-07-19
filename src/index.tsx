import React from 'react';
import { createRoot } from 'react-dom/client';
import { RecoilRoot } from 'recoil';

import AppTheme from './app/Theme';
import App from './app/App';

const rootElement = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <AppTheme themeType="dark">
        <App />
      </AppTheme>
    </RecoilRoot>
  </React.StrictMode>
);