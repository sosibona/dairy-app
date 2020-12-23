import React, { Component } from 'react';
import './Item.scss';

class Item extends Component {
  render() {
    const { title, comments, deleteItem, id, activeItem } = this.props;
    return (
      <div className="item">
        {activeItem === id && <div className="item_active"></div>}
        <div className="item-title" onClick={() => this.props.setActiveItem(id)}>
          <span className="item-title__name">{title}</span>
          <span className="item-title__count">{comments}</span>
        </div>
        <button className="item__btn" onClick={() => deleteItem(id)}>Delete</button>
      </div>
    );
  }
}

export default Item;