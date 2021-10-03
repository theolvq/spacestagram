import styled from "styled-components";

export const CardContainer = styled.article`
  max-width: 614px;
  margin: 0 auto 1.5rem;
  border: 1px solid var(--light-grey);
  background-color: var(--bg-white);

  figcaption,
  p {
    padding: 0.5rem 1rem;
  }

  figure img {
    width: 100%;
    display: block;
  }

  figcaption {
    font-size: 1.2rem;
  }

  .date {
    font-size: 0.6rem;
    color: var(--md-grey);
    text-transform: uppercase;
  }

  .footer {
    padding: 0.375rem 1rem 0.5rem;
    margin-top: 0.25rem;
    display: flex;
  }
`;
