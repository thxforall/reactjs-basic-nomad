import { DefaultTeme } from 'styled-components';

export const theme: DefaultTeme = {
  color: {
    background: 'rgb(254, 246, 228)',
    headline: 'rgb(0, 24, 88)',
    paragraph: 'rgb(23, 44, 102)',
    button: 'rgb(245, 130, 174)',
    buttonText: 'rgb(0, 24, 88)',
    section:`rgb(243, 210, 193)`,
  },
  size: {
    space: {
      1: '0.25rem',
      2: '0.5rem',
      4: '1rem',
      6: '1.5rem',
      8: '2rem',
    },
  },
  radius: {
    small: '8px',
    medium: '16px',
  },
  shadow: {
    medium: '0 2px 8px rgba(0, 0, 0, 0.2)',
  },
};
