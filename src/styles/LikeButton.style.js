import styled from 'styled-components';

export const LikeButton = styled.button`
  border: none;
  background-color: #fff;
  cursor: pointer;

  svg {
    width: 32px;
    fill: ${(props) => (props.isLiked ? '#ED4956' : '#fff')};
    stroke: ${(props) => (props.isLiked ? '#ED4956' : '#000')};
    stroke-width: 0.1rem;
    transform: ${(props) => (props.isClicked ? 'scale(1.25)' : 'scale(1)')};
    transition: transform 150ms ease-out;
  }
`;
