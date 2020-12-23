import React, { useCallback, useEffect, useState } from 'react';

const CreateComment = ({ createNewComment }) => {
  const [comment, setComment] = useState("");

  const keydownHandler = useCallback((event) => {
    if (event.keyCode === 13 && event.ctrlKey) {
      const { value } = event.target;
      if (!value) return;
      createNewComment(value);
      setComment("");
    }
  }, [createNewComment])

  useEffect(() => {
    document.addEventListener('keydown', keydownHandler);
    return () => {
      document.removeEventListener('keydown', keydownHandler);
    }
  }, [keydownHandler])

  return (
    <div className="comment">
      <div className="comment__user-logo new-comment"></div>
      <div className="comment__text">
        <textarea
          className="comment__input"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        ></textarea>
      </div>
    </div>
  );
}

export default CreateComment;