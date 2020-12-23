import React from 'react';
import Comment from './Comment';
import CreateComment from './CreateComment';

const CommentsList = ({ activeItem, createNewComment, comments }) => {
  const commentsList = comments.map(comment => (
    <Comment key={comment.id} comment={comment.text} />
  ));
  return (
    <div>
      <span className="container__title">Comments {activeItem}</span>
      <div className="comments">
        {commentsList}
      </div>
      {activeItem && <CreateComment createNewComment={createNewComment} />}
    </div>
  );
}

export default CommentsList;
