import * as styled from 'styled-components';
import BlueVinylRegular from '../assets/fonts/blue_vinyl_regular.otf';
import NimbusSansBold from '../assets/fonts/NimbusSanL-Bol.otf';
import NimbusSansRegular from '../assets/fonts/NimbusSanL-Reg.otf';

export const GlobalStyles = styled.createGlobalStyle`
  @font-face {
    font-family: 'Nimbus Sans';
    font-style: normal;
    font-weight: 400;
    src: url(${NimbusSansRegular});
  }
  @font-face {
    font-family: 'Nimbus Sans Bold';
    font-style: normal;
    font-weight: 600;
    src: url(${NimbusSansBold});
  }

  @font-face {
    font-family: 'Blue Vinyl';
    font-style: normal;
    src: url(${BlueVinylRegular});
  }

  :root {
    --light-grey: hsl(0, 0%, 85%);
    --md-grey: hsl(0, 0%, 46%);
    --dark-grey: hsl(0, 0%, 15%);
    --bg-off-white: hsl(0, 0%, 98%);
    --bg-white: hsl(0, 0%, 100%);
    --red: hsl(355, 82%, 61%);
    --light-blue: hsl(203, 84%, 83%);
    --blue: hsl(204, 100%, 48%);
    --transparent: hsla(0, 0%, 0%, 0);
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Nimbus Sans', sans-serif;
    color: var(--dark-grey);
    background-color: var(--bg-off-white);
    font-size: 0.875rem;
    line-height: 1.125rem;
  }

  ul {
    list-style: none;
  }

  a {
    font-family: 'Nimbus Sans Bold';
    text-decoration: none;
    color: inherit;
  }

  h1 > a {
    font-family: 'Blue Vinyl';
  }
`;
