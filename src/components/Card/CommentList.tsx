import React from "react";

import {Comment} from "../../types/comment";

interface CommentListProps {
  comments: Comment[];
}
const CommentList: React.FC<CommentListProps> = ({comments}) => {
  return (
    <section className="comments">
      {comments.map((comment) => (
        <div key={comment.text}>
          <a href={`/${comment.author}`}>{comment.author}</a>{" "}
          <span>{comment.text}</span>
        </div>
      ))}
    </section>
  );
};

export default CommentList;
