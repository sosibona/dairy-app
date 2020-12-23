import React, { Component } from 'react';
import Comment from './Comment';
import CreateComment from './CreateComment';

class CommentsList extends Component {
  render() {
    const commentsList = this.props.comments.map(comment => {
      return <Comment key={comment.id} comment={comment.text} />
    })
    return (
      <div>
        <span className="container__title">Comments {this.props.activeItem}</span>
        <div className="comments">
          {commentsList}
        </div>
        {this.props.activeItem && <CreateComment createNewComment={this.props.createNewComment} />}
      </div>
    );
  }
}

export default CommentsList;