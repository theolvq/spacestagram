import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  background-color: var(--transparent);
  border: none;
`;

export const LikeButton = styled(Button)`
  svg {
    width: 2rem;
    fill: ${({isLiked}) => (isLiked ? "var(--red)" : "var(--dark-grey)")};
    stroke: ${({isLiked}) => (isLiked ? "var(--red)" : "var(--dark-grey)")};
    stroke-width: 0.1rem;
    transform: ${({isClicked}) => (isClicked ? "scale(1.3)" : "scale(1)")};
    transition: transform 250ms;
  }
`;

export const ArrowButton = styled(Button)`
  padding: 0.5em;
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
