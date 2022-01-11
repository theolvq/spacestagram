import styled, {css, keyframes} from 'styled-components';

// Generic button styles
export const Button = styled.button`
  cursor: pointer;
  background-color: var(--transparent);
  border: none;
  padding: 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Like button animation and styles
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

interface LikeButtonProps {
  isClicked: boolean;
  isLiked: boolean;
}

const animation = css`
  animation: ${likeAnimation} 450ms ease-in-out;
`;

const colorChange = ({isLiked}: LikeButtonProps) => css`
  ${isLiked ? 'var(--red)' : 'var(--dark-grey)'}
`;

export const LikeButton = styled(Button)`
  ${({isClicked}: LikeButtonProps) => isClicked && animation}

  svg {
    fill: ${colorChange};
    stroke: ${colorChange};
  }
`;

// Arrow (back to top) button styles
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

interface SaveButtonProps {
  isSaved: boolean;
}

// Save (bookmark) button styles
export const SaveButton = styled(Button)`
  margin-left: auto;

  :hover {
    fill: ${({isSaved}: SaveButtonProps) => !isSaved && 'var(--md-grey)'};
  }
`;

// Post comment button styles
export const PostCommentButton = styled(Button)`
  color: var(--blue);
  font-family: 'Nimbus Sans Bold';

  &[disabled] {
    opacity: 0.3;
    cursor: default;
  }
`;

export const EmojiButton = styled(Button)`
  padding: 0.5rem 1rem 0.5rem 0;
`;
