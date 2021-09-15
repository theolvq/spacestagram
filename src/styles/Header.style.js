import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  background-color: #fff;
  position: sticky;
  z-index: 1;
  top: 0;
  border-bottom: 1px solid var(--light-grey);

  .container {
    max-width: 614px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ul {
    display: flex;
    gap: 1rem;
  }

  h1 {
    font-family: "Satisfy", cursive;
    font-size: 1.75rem;
  }

  @media (max-width: 614px) {
    .container {
      padding: 0 1rem;
    }
  }
`;
