import { DefaultTeme } from 'styled-components';

export const theme: DefaultTeme = {
  color: {
    primary: 'rgba(227, 9, 19, 1)',
    primaryLight: 'rgba(255, 71, 71, 1)',
    primaryDark: 'rgba(176, 6, 15, 1)',
    accent: 'rgba(174, 6, 16, 1)',
    background: 'rgba(20, 20, 20, 1)',
    text: 'rgba(255, 255, 255, 1)',
  },
  size: {
    space: {
      1: '0.25rem',
      2: '0.5rem',
      4: '1rem',
      6: '1.5rem',
      8: '2rem',
      normal: '16px',
      medium: '20px',
      bigger: '24px',
    },
    radius: {
      small: '8px',
      medium: '16px',
    },
  },
  shadow: {
    medium: '0 2px 8px rgba(0, 0, 0, 0.2)',
  },
};
