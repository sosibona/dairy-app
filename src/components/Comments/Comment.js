import React, { Component } from 'react';
import './Comment.scss';

class Comment extends Component {
  render() {
    return (
      <div className="comment">
        <div className="comment__user-logo"></div>
        <div className="comment__text">{this.props.comment}</div>
      </div>
    );
  }
}

export default Comment;