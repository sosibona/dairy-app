import React, { Component } from 'react';
import CreateItemInput from './CreateItemInput';
import Item from './Item';

class ItemsList extends Component {
  render() {
    const itemsList = this.props.items.map(item => {
      return (
        <Item
          key={item.id}
          id={item.id}
          title={item.title}
          comments={item.comments.length}
          deleteItem={this.props.deleteItem}
          setActiveItem={this.props.setActiveItem}
          activeItem={this.props.activeItem}
        />
      )
    })
    return (
      <div>
        <span className="container__title">Items</span>
        <CreateItemInput createNewItem={this.props.createNewItem} />
        <div className="items">
          {itemsList}
        </div>
      </div>
    );
  }
}

export default ItemsList;