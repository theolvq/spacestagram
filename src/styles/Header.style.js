import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  background-color: #fff;
  position: sticky;
  z-index: 1;
  top: 0;
  border-bottom: 1px solid var(--light-grey);
  padding: 0.5em 0;

  h1 {
    font-family: "Satisfy", cursive;
    font-size: 1.75rem;
    max-width: 614px;
    margin: 0 auto;
  }
`;
