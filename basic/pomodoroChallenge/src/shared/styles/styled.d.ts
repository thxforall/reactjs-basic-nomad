import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTeme {
    color: {
      background: string;
      headline: string;
      paragraph: string;
      button: string;
      buttonText: string;
      section: string;
    };
    size: {
      space: {
        1: string;
        2: string;
        4: string;
        6: string;
        8: string;
      };
    };
    radius: {
      small: string;
      medium: string;
    };
    shadow: {
      medium: string;
    };
  }
}
