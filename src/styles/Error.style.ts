import styled from 'styled-components';
import {ErrorProps} from '../types/error';

export const ErrorSnackBar = styled.div`
  border: 2px solid var(--red);
  padding: 1em 2em;
  width: 300px;
  text-align: center;
  transition: 500ms;
  opacity: ${({error}: ErrorProps) => (error ? 1 : 0)};

  position: fixed;
  background-color: var(--light-grey);
  left: 0;
  bottom: 0;
`;
