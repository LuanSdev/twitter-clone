import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, border-style, #root{
    max-height: 100vh;
    max-width: 100vw;

    height: 100%;
    width: 100%;

    color: var(--white);
  }

  *, button, input{
    border: 0;
    background: none;
    font-family: --apple--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  html{
    background: var(--primary);
  }

  :root{
    --primary: #000;
    --secondary: #15181c;
    --search: #d9d9d9;
    --gray: #7a7a7a;
    --outline: #2f3336;
    --retweet: #00c06b;
    --like: #e8265e;
    --twitter: #33a1f2;
    --twitter-dark-mode: #011017;
    --twitter-light-hover: #2c8ed6;
  }
`;
