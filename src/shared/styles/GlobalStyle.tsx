import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Wittgenstein:ital,wght@0,400..900;1,400..900&display=swap');
  
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  /* Prevent font size inflation */
  html {
    -moz-text-size-adjust: none;
    -webkit-text-size-adjust: none;
    text-size-adjust: none;
  }
  
  /* Remove default margin in favour of better control in authored CSS */
  body, h1, h2, h3, h4, p,
  figure, blockquote, dl, dd {
    margin-block-end: 0;
  }
  
  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul,
  ol, li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  /* Set core body defaults */
  body {
    min-height: 100vh;
    line-height: 1.5;
  }
  
  /* Set shorter line heights on headings and interactive elements */
  h1, h2, h3, h4,
  button, input, label {
    line-height: 1.1;
  }
  
  /* Balance text wrapping on headings */
  h1, h2,
  h3, h4 {
    text-wrap: balance;
  }
  
  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
    color: currentColor;
  }
  
  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }
  
  /* Inherit fonts for inputs and buttons */
  input, button,
  textarea, select {
    font-family: inherit;
    font-size: inherit;
  }
  
  /* Make sure textareas without a rows attribute are not tiny */
  textarea:not([rows]) {
    min-height: 10em;
  }
  
  /* Anything that has been anchored to should have extra scroll margin */
  :target {
    scroll-margin-block: 5ex;
  }
  
  body {
    font-weight: 300;
    font-family: 'Wittgenstein', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;  
    background: rgb(12,26,60);
    background: linear-gradient(174deg, rgba(12,26,60,1) 0%, rgba(33,57,150,1) 43%, rgba(50,91,251,1) 100%);
    color: ${(props) => props.theme.colors.gray[400]}
  }
  
  a {
    text-decoration: none;
  }
`;
