import styled from 'styled-components';

export const LikeButton = styled.button`
  border: none;
  background-color: #fff;
  cursor: pointer;

  svg {
    width: 32px;
    fill: ${(props) => (props.isLiked ? '#f00' : '#fff')};
    stroke: ${(props) => (props.isLiked ? '#f00' : '#000')};
    stroke-width: 2px;
    transition: 500ms ease-in-out;

    /* &:hover {
      fill: ${(props) => (props.isLiked ? '#666' : '#ddd')};
    } */
  }
`;
