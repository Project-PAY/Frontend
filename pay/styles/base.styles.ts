import css from 'styled-jsx/css';

const baseStyles = css.global`
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body > div {
    height: 100%;
  }
`;

export default baseStyles;
