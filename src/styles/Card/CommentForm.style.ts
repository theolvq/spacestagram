import styled from "styled-components";

export const StyledCommentForm = styled.form`
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
