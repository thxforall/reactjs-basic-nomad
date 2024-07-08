import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      gray: {
        [key: number]: string;
      };
      blue: {
        [key: number]: string;
      };
    };
    space: {
      [key: number]: string;
    };
    borderRadius: {
      small: string;
      medium: string;
    };
    shadows: {
      medium: string;
    };
  }
}

// $color-dark-50: #E6E6E6;
// $color-dark-100: #B3B3B3;
// $color-dark-200: #808080;
// $color-dark-300: #4D4D4D;
// $color-dark-400: #1A1A1A;
// $color-dark-500: #000000;

// $space-1: 0.25rem;
// $space-2: 0.5rem;
// $space-4: 1rem;
// $space-6: 1.5rem;
// $space-8: 2rem;

// $border-radius-small: 4px;
// $border-radius-medium: 6px;

// $shadow-medium: 0 2px 8px rgba(0, 0, 0, 0.2);
