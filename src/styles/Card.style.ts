import styled from 'styled-components';

export const CardContainer = styled.article`
  max-width: 614px;
  margin: 0 auto 1.5rem;
  border: 1px solid var(--light-grey);
  background-color: var(--bg-white);

  figcaption,
  p {
    padding: 0.5rem 1rem;
  }

  figure img {
    width: 100%;
    display: block;
  }

  figcaption {
    font-size: 1.2rem;
  }
`;

export const StyledCommentList = styled.section`
  padding: 0.5rem 1rem;
`;

export const StyledDate = styled.p`
  font-size: 0.6rem;
  color: var(--md-grey);
  text-transform: uppercase;
`;

export const StyledImageFooter = styled.section`
  padding: 0.375rem 1rem 0.5rem;
  margin-top: 0.25rem;
  display: flex;
`;

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

export const StyledCommentForm = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.375rem 1rem;

  textarea {
    border: none;
    height: 1.125rem;
    max-height: 5rem;
    width: 100%;
    resize: none;

    :focus {
      outline: none;
    }
  }
`;
