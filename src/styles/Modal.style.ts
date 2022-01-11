import styled, {keyframes} from 'styled-components';

const modalAnimation = keyframes`
    from {
      transform: scale(1.2);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
`;

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: hsla(0, 0%, 0%, 0.65);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${modalAnimation} 100ms ease-out;

  div {
    width: 400px;
    background-color: var(--bg-white);
    text-align: center;
    border-radius: 0.75rem;

    button {
      height: 3rem;
      width: 100%;
      padding: 0.25rem 0.5rem;
    }

    button:nth-child(-n + 2) {
      color: var(--red);
      font-weight: bold;
    }
    button:not(:last-child) {
      border-bottom: 1px solid var(--light-grey);
    }
  }
`;
