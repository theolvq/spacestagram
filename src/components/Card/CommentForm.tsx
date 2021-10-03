import React, {useState} from "react";

import {CommentButton, EmojiButton} from "../../styles/Buttons.style";
import {StyledCommentForm} from "../../styles/Card/CommentForm.style";

import EmojiIcon from "./EmojiIcon";

const CommentForm = () => {
  const [comment, setComment] = useState("");

  const commentButtonLabel = "Post";
  const commentLabel = "Add a comment...";
  const isDisabled = comment.length < 1;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <StyledCommentForm onSubmit={handleSubmit}>
      <EmojiButton>
        <EmojiIcon />
      </EmojiButton>
      <textarea
        aria-label={commentLabel}
        value={comment}
        name="comment"
        autoComplete="off"
        autoCorrect="off"
        onChange={handleChange}
        placeholder={commentLabel}
      />
      <CommentButton disabled={isDisabled}>{commentButtonLabel}</CommentButton>
    </StyledCommentForm>
  );
};

export default CommentForm;
