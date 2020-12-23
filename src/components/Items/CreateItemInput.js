import React, { Component } from 'react';
import './CreateItemInput.scss';

class CreateItemInput extends Component {
  constructor(props) {
    super();
    this.state = {
      value: '',
    }
  }

  handleValue = event => {
    this.setState({
      value: event.target.value,
    });
  };

  createItem = () => {
    this.props.createNewItem(this.state.value)
    this.setState({
      value: ''
    })
  }



  render() {
    return (
      <div className="create-item">
        <input
          className="create-item__input"
          type="text"
          placeholder="Type name here..."
          value={this.state.value}
          onChange={(event) => this.handleValue(event)}
        />
        <button
          className="create-item__btn"
          onClick={this.createItem}
        >
          Add new
        </button>
      </div>
    );
  }
}

export default CreateItemInput;