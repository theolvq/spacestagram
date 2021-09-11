import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Open Sans', sans-serif;

  & > * {
    max-width: 614px;
  }
`;
