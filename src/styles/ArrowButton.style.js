import styled from 'styled-components';

export const ArrowButton = styled.button`
  padding: 1em;
  border-radius: 50%;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  border: 1px solid hsla(0, 0%, 50%, 0.75);
  transition: 500ms;
  background-color: #fff;
  svg {
    transform: rotate(270deg);
  }
  &:hover,
  &:focus-visible {
    background: hsla(0, 0%, 75%, 0.75);
    fill: hsla(0, 0%, 25%, 0.75);
  }
`;
