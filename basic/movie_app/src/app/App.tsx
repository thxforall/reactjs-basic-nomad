import { Outlet } from 'react-router-dom';
import GlobalStyle from '../shared/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Outlet />
      </ThemeProvider>
    </>
  );
}
