import styled from 'styled-components';

export const CardContainer = styled.article`
  box-shadow: 0 0 0.5em 0.125em hsla(0, 50%, 14%, 0.25);
  margin: 2em auto;
  border: 1px solid hsla(0, 0%, 50%, 0.75);
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
  }

  div {
    display: flex;
  }
`;
