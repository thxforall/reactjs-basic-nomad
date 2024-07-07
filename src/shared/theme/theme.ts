import { DefaultTheme } from 'styled-components/dist/types';

export const theme: DefaultTheme = {
  colors: {
    gray: {
      50: '#E6E6E6',
      100: '#B3B3B3',
      200: '#808080',
      300: '#4D4D4D',
      400: '#1A1A1A',
      500: '#000000',
    },
    blue: {
      50: '#3565F2',
      100: '#305AD9',
      200: '#122A59',
      300: '#122A59',
      400: '#122A59',
    },
  },
  space: {
    1: '0.25rem',
    2: '0.5rem',
    4: '1rem',
    6: '1.25rem',
    8: '2rem',
  },
  borderRadius: {
    small: '4px',
    medium: '5px',
  },
  shadows: {
    medium: '0 2px 8px rgba(0, 0, 0, 0.2)',
  },
};
