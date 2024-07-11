import React, { useState, createContext, useContext, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../theme';
import { RouterProvider } from 'react-router-dom';
import GlobalStyle from '../styles/GlobalStyle';
import router from './Router';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useRecoilValue } from 'recoil';
import { isDarkAtom } from './atoms';

const App = () => {
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={true} />
      </ThemeProvider>
    </>
  );
};

export default App;
