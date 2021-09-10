import styled from 'styled-components';

export const Card = styled.section`
  max-width: 560px;
  box-shadow: 0 0 1em 0.25em hsla(0, 50%, 14%, 0.3);
  margin: 2em auto;
  padding: 1em 2em;
  border-radius: 0.5em;

  figure {
    margin: 0;
  }

  img {
    border-radius: 1rem 1rem 0 0;
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
