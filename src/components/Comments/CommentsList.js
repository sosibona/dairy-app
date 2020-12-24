import React, { memo } from 'react';
import Comment from './Comment';
import CreateComment from './CreateComment';

const CommentsList = memo(({ positionActiveItem, createNewComment, comments, activeItemId }) => {
  const commentsList = comments.map(comment => (
    <Comment key={comment.id} comment={comment.text} />
  ));
  return (
    <div>
      <span className="container__title">
        Comments {positionActiveItem ? '#' + positionActiveItem : ""}
      </span>
      <div className="comments">
        {commentsList}
      </div>
      {activeItemId && <CreateComment createNewComment={createNewComment} />}
    </div>
  );
});

export default CommentsList;
