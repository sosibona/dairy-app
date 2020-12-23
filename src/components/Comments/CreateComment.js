import React, { Component } from 'react';

class CreateComment extends Component {
  constructor(props) {
    super();
    this.state = {
      comment: ""
    }
  }

  keydownHandler = (e) => {
    if (e.keyCode === 13 && e.ctrlKey) {
      this.props.createNewComment(e.target.value)
      this.setState({
        comment: ''
      })
    }
  }

  componentDidMount(){
    document.addEventListener('keydown',this.keydownHandler);
  }

  componentWillUnmount(){
    document.removeEventListener('keydown',this.keydownHandler);
  }

  handleComment = (event) => {
    this.setState({
      comment: event.target.value,
    })
  }
  render() {
    return (
      <div className="comment">
        <div className="comment__user-logo new-comment"></div>
        <div className="comment__text">
          <textarea
            className="comment__input"
            value={this.state.comment}
            onChange={(event) => this.handleComment(event)}
          ></textarea>
        </div>
      </div>
    );
  }
}

export default CreateComment;