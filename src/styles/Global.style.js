import * as styled from "styled-components";

export const GlobalStyles = styled.createGlobalStyle`
  :root {
    --light-grey: hsl(0, 0%, 85%);
    --dark-grey: hsl(0, 0%, 15%);
    --bg-white: hsl(0, 0%, 98%);
    --red: hsl(355, 82%, 61%);
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
    background-color: var(--bg-white);
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
