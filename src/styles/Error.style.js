import styled from "styled-components";

export const ErrorSnackBar = styled.div`
  border: 2px solid var(--red);
  padding: 1em 2em;
  width: 300px;
  text-align: center;
  opacity: ${({error}) => (error ? 1 : 0)};
  transition: 500ms;
  position: fixed;
  background-color: var(--light-grey);
  left: 0;
  bottom: 0;
`;
