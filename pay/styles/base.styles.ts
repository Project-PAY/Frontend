import css from 'styled-jsx/css';

const baseStyles = css.global`
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h3 {
    margin-top: 0;
  }

  h2 {
    margin-top: 0;
    margin-bottom: 0;
  }

  body > div {
    height: 100%;
  }

  input:focus{
    outline: none;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  ol, ul {
    list-style: none;
    padding-inline-start: 0;
    margin-top: 0;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
`;

export default baseStyles;
