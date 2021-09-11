import styled from 'styled-components';

export const Button = styled.button`
  margin: 2rem 0;
  border: 1px solid hsla(0, 0%, 75%, 0.75);
  border-radius: 5rem;
  padding: 0.5em 1em;
  transition: 500ms;

  &:hover {
    background: hsla(0, 0%, 75%, 0.75);
  }

  svg {
    transform: rotate(270deg);
  }

  .arrow {
    position: fixed;
    bottom: 0;
    right: 0;
  }
`;
