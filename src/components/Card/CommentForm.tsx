import React, {useState} from "react";

import {PostCommentButton, EmojiButton} from "../../styles/Buttons.style";
import {StyledCommentForm} from "../../styles/Card/CommentForm.style";
import {Comment} from "../../types/Comment";

import EmojiIcon from "./EmojiIcon";

interface CommentFormProps {
  commentRef: React.Ref<HTMLTextAreaElement>;
  setComments: React.Dispatch<React.SetStateAction<Comment[]>>;
}

const CommentForm: React.FC<CommentFormProps> = ({commentRef, setComments}) => {
  const [comment, setComment] = useState("");

  const commentButtonLabel = "Post";
  const commentLabel = "Add a comment...";
  const isDisabled = comment.length < 1;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newComment = {
      author: "hummingbird",
      text: comment,
    };
    setComments((prev) => [...prev, newComment]);
    setComment("");
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
        rows={4}
        autoComplete="off"
        autoCorrect="off"
        onChange={handleChange}
        placeholder={commentLabel}
        ref={commentRef}
      />
      <PostCommentButton type="submit" disabled={isDisabled}>
        {commentButtonLabel}
      </PostCommentButton>
    </StyledCommentForm>
  );
};

export default CommentForm;
