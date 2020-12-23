import React from 'react';
import './Comment.scss';

const Comment = ({comment}) => {
  return (
    <div className="comment">
      <div className="comment__user-logo"></div>
      <div className="comment__text">{comment}</div>
    </div>
  );
}

export default Comment;