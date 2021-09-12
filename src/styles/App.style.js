import styled from 'styled-components';

export const Container = styled.main`
  --light-grey: hsla(0, 0%, 85%, 1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: 'Open Sans', sans-serif;
  color: rgb(38, 38, 38);
  background-color: #fafafa;
  min-height: 100vh;

  & > *:not(header) {
    max-width: 614px;
  }
`;
