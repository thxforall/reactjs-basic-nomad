import React from 'react';
import { createRoot } from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';

import AppTheme from './app/Theme';
import App from './app/App';

const rootElement = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElement);

const client = new QueryClient();

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={client}>
        <AppTheme themeType="dark">
          <App />
        </AppTheme>
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>
);
