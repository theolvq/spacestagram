import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
`;

export const LikeButton = styled(Button)`
  border: none;
  background-color: #fff;
  cursor: pointer;

  svg {
    width: 32px;
    fill: ${({isLiked}) => (isLiked ? "var(--red)" : "#fff")};
    stroke: ${({isLiked}) => (isLiked ? "var(--red)" : "#000")};
    stroke-width: 0.1rem;
    transform: ${({isClicked}) => (isClicked ? "scale(1.25)" : "scale(1)")};
    transition: transform 150ms ease-out;
  }
`;

export const MoreButton = styled(Button)`
  margin: 2rem 0;
  border-radius: 5rem;
  padding: 0.5em 1em;
  transition: 500ms;
  border: 1px solid var(--light-grey);
`;

export const ArrowButton = styled(Button)`
  padding: 1em;
  border-radius: 50%;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  border: none;
  transition: 500ms;
  background-color: hsla(0, 0%, 0%, 0);
  cursor: pointer;

  svg {
    transform: rotate(270deg);
    fill: var(--dark-grey);
  }
`;
