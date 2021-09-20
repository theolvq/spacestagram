import styled, {css, keyframes} from "styled-components";

const likeAnimation = keyframes`
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(1.2);
    }
    50% {
      transform: scale(0.95);
    }
    100% {
      transform: scale(1);
    }
`;

const animation = css`
  animation: ${likeAnimation} 450ms ease-in-out;
`;

const colorChange = ({isLiked}) => css`
  ${isLiked ? "var(--red)" : "var(--dark-grey)"}
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: var(--transparent);
  border: none;
  padding: 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LikeButton = styled(Button)`
  ${({isClicked}) => isClicked && animation}

  svg {
    fill: ${colorChange};
    stroke: ${colorChange};
  }
`;

export const ArrowButton = styled(Button)`
  border-radius: 50%;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  background: var(--bg-white);

  svg {
    transform: rotate(270deg);
    fill: var(--dark-grey);
  }
`;
