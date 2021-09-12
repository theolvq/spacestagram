import styled from "styled-components";

export const CardContainer = styled.article`
  margin: 1.5rem auto 0 auto;
  border: 1px solid var(--light-grey);
  background-color: #fff;

  figcaption,
  p,
  div {
    padding: 0 1rem;
  }

  figure {
    margin: 0;
  }

  img {
    width: 100%;
    display: block;
    margin-bottom: 1em;
  }

  figcaption {
    font-size: 1.5rem;
  }

  figcaption + p {
    font-size: 0.75rem;
    color: hsla(0, 0%, 35%, 1);
  }

  section {
    display: flex;
  }
`;
