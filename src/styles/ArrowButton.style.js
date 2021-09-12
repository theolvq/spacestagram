import styled from 'styled-components';

export const ArrowButton = styled.button`
  padding: 1em;
  border-radius: 50%;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  border: 1px solid var(--light-grey);
  transition: 500ms;
  background-color: #fff;
  cursor: pointer;

  svg {
    transform: rotate(270deg);
  }
`;
