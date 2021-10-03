import styled from "styled-components";

export const StyledCardHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-height: 3.75rem;

  .container {
    display: flex;
    align-items: center;
    gap: 0.875rem;
    padding: 1rem;
  }

  img {
    width: 2rem;
    border-radius: 50%;
    border: 1px solid var(--light-grey);
  }

  span {
    font-weight: 600;
  }
`;
