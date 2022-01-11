import {BaseEmoji, Picker} from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';
import React, {FC, KeyboardEventHandler, useState} from 'react';
import {EmojiButton, PostCommentButton} from '../../styles/Buttons.style';
import {StyledCommentForm} from '../../styles/Card.style';
import {Comment} from '../../types/comment';
import EmojiIcon from './EmojiIcon';

interface CommentFormProps {
  commentRef: React.Ref<HTMLTextAreaElement>;
  setComments: React.Dispatch<React.SetStateAction<Comment[]>>;
}

const CommentForm: FC<CommentFormProps> = ({commentRef, setComments}) => {
  const [comment, setComment] = useState('');
  const [showPicker, setShowPicker] = useState(false);

  const commentButtonLabel = 'Post';
  const commentLabel = 'Add a comment...';
  const isDisabled = comment.length < 1;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  const submitForm = () => {
    const newComment = {
      author: 'hummingbird',
      text: comment,
    };
    setComments((prev) => [...prev, newComment]);
    setComment('');
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitForm();
  };

  const submitOnEnter: KeyboardEventHandler = (
    event: React.KeyboardEvent<HTMLTextAreaElement>,
  ) => {
    if (event.code !== 'Enter') {
      return;
    }
    event.preventDefault();
    submitForm();
  };

  const toggleEmojiPicker = () => {
    setShowPicker(!showPicker);
  };

  const addEmoji = (emoji: BaseEmoji) => {
    setComment((prev) => prev + emoji.native);
  };

  return (
    <StyledCommentForm onSubmit={handleSubmit}>
      <EmojiButton type="button" onClick={toggleEmojiPicker}>
        <EmojiIcon />
      </EmojiButton>
      {showPicker && (
        <Picker
          style={{position: 'absolute', bottom: '40px', left: '15px'}}
          onSelect={addEmoji}
        />
      )}
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
        onKeyDown={submitOnEnter}
      />
      <PostCommentButton type="submit" disabled={isDisabled}>
        {commentButtonLabel}
      </PostCommentButton>
    </StyledCommentForm>
  );
};

export default CommentForm;
