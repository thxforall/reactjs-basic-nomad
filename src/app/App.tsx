import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';
import { RouterProvider } from 'react-router-dom';
import GlobalStyle from 'styles/GlobalStyle';
import router from './Router';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router} />;
        <ReactQueryDevtools initialIsOpen={true} />
      </ThemeProvider>
    </>
  );
};

export default App;
