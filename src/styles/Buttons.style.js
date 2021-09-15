import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  background-color: hsla(0, 0%, 0%, 0);
`;

export const LikeButton = styled(Button)`
  border: none;

  svg {
    width: 32px;
    fill: ${({isLiked}) => (isLiked ? "var(--red)" : "#fff")};
    stroke: ${({isLiked}) => (isLiked ? "var(--red)" : "var(--dark-grey)")};
    stroke-width: 0.1rem;
    transform: ${({isClicked}) => (isClicked ? "scale(1.25)" : "scale(1)")};
    transition: transform 150ms ease-out;
  }
`;

export const ArrowButton = styled(Button)`
  padding: 0.5em;
  border-radius: 50%;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  border: none;
  background: #fff;

  svg {
    transform: rotate(270deg);
    fill: var(--dark-grey);
  }
`;
