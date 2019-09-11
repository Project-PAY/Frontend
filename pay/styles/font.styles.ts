import css from 'styled-jsx/css';

const fontStyles = css.global`
  @font-face {
    font-family: 'Gotham-Bold';
    font-style: normal;
    font-weight: normal;
    src: local('Gotham Bold'), url('../src/assets/fonts/GothamBold.woff') format('woff');
  }
`;

export default fontStyles;
