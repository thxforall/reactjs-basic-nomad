import 'styled-components';

declare module 'styled-components' {
  export interface SharedTheme {
    color: {
      primary: string;
      primaryLight: string;
      primaryDark: string;
      accent: string;
      background: string;
      text: string;
    };
    size: {
      space: {
        1: string;
        2: string;
        4: string;
        6: string;
        8: string;
      };
      radius: {
        small: string;
        medium: string;
      };
    };
    shadow: {
      medium: string;
    };
  }
}
