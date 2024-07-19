import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../sharedTheme';
import { ReactNode } from 'react';
import GlobalStyle from '../shared/styles/GlobalStyle';

type ThemeProps = {
  children: ReactNode;
  themeType: 'dark' | 'light';
};

const AppTheme = ({ children, themeType }: ThemeProps) => {
  const theme = themeType === 'dark' ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default AppTheme;
