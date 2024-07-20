import { SharedTheme } from 'styled-components';

export const darkTheme: SharedTheme = {
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
    },
    radius: {
      small: '8px',
      medium: '12px',
    },
  },
  shadow: {
    medium: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
};

export const lightTheme: SharedTheme = {
  color: {
    primary: 'rgba(227, 9, 19, 1)',
    primaryLight: 'rgba(255, 71, 71, 1)',
    primaryDark: 'rgba(176, 6, 15, 1)',
    accent: 'rgba(174, 6, 16, 1)',
    background: 'rgba(255, 255, 255, 1)',
    text: 'rgba(20, 20, 20, 1)',
  },
  size: {
    space: {
      1: '0.25rem',
      2: '0.5rem',
      4: '1rem',
      6: '1.5rem',
      8: '2rem',
    },
    radius: {
      small: '4px',
      medium: '8px',
    },
  },
  shadow: {
    medium: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
};
