import React, {FC} from 'react';
import {StyledCommentList} from '../../styles/Card.style';
import {Comment} from '../../types/comment';

interface CommentListProps {
  comments: Comment[];
}
const CommentList: FC<CommentListProps> = ({comments}) => {
  return (
    <StyledCommentList data-testid="comment-list">
      {comments.map((comment) => (
        <div key={comment.text}>
          <a href={`/${comment.author}`}>{comment.author}</a>{' '}
          <span>{comment.text}</span>
        </div>
      ))}
    </StyledCommentList>
  );
};

export default CommentList;
