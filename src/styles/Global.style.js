import * as styled from "styled-components";

export const GlobalStyles = styled.createGlobalStyle`
  :root {
    --light-grey: hsl(0, 0%, 85%);
    --md-grey: hsl(0, 0%, 56%);
    --dark-grey: hsl(0, 0%, 15%);
    --bg-off-white: hsl(0, 0%, 98%);
    --bg-white: hsl(0, 0%, 100%);
    --red: hsl(355, 82%, 61%);
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
    font-family: "Open Sans", sans-serif;
    color: var(--dark-grey);
    background-color: var(--bg-off-white);
    font-size: 0.875rem;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
