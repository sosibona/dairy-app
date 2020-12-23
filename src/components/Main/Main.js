import React, { Component } from 'react';
import CommentsList from '../Comments/CommentsList';
import Container from '../Container/Container';
import ItemsList from '../Items/ItemsList';

class Main extends Component {
  constructor(props) {
    super();
    this.state = {
      items: [],
      activeItem: null,
    }
  }

  componentDidMount() {
    const items = localStorage.getItem('items');
    if (items) {
      this.setState({
        items: JSON.parse(items),
      });
    }
    const activeItem = localStorage.getItem('activeItem');
    if (activeItem) {
      this.setState({
        activeItem: JSON.parse(activeItem),
      });
    }

  }

  createNewItem = (item) => {
    const newItem = {
      id: Math.random().toString(),
      title: item,
      comments: [],
    }
    const updateItems = this.state.items.concat(newItem);
    this.setState({
      items: updateItems,
    })
    localStorage.setItem('items', JSON.stringify(updateItems))
  }

  createNewComment = (text) => {
    const newComent = {
      id: Math.random().toString(),
      text,
    }
    const updateItems = this.state.items.map(item => {
      if (item.id === this.state.activeItem.itemId) {
        return {
          ...item,
          comments: item.comments.concat(newComent),
        }
      } else {
        return item;
      }
    })
    this.setState({
      items: updateItems,
    })
    localStorage.setItem('items', JSON.stringify(updateItems))
  }

  deleteItem = async itemId => {
    if (this.state.activeItem && itemId === this.state.activeItem.itemId) {
      this.setState({
        activeItem: null,
      })
    }
    const updateItems = this.state.items.filter(item => item.id !== itemId);
    await this.setState({
      items: updateItems,
    });
    if (this.state.activeItem) {
      this.setActiveItem(this.state.activeItem.itemId)
    }
    localStorage.setItem('items', JSON.stringify(updateItems))
  };

  disableActiveItem = () => {
      this.setState({
        activeItem: null
      })
      localStorage.setItem('activeItem', JSON.stringify(null))
      return;
  }

  setActiveItem = (itemId) => {
    const numberItem = this.state.items.findIndex((item) => item.id === itemId);
    const activeItem = {
      itemId: itemId,
      position: "#" + (numberItem + 1),
    }
    this.setState({
      activeItem,
    })
    localStorage.setItem('activeItem', JSON.stringify(activeItem))
  }


  render() {
    let activeItem;
    if (!this.state.activeItem) {
      activeItem = null;
    } else {
      activeItem = this.state.items.find(item => item.id === this.state.activeItem.itemId)
    }
    return (
      <div className="main">
        <Container>
          <ItemsList
            items={this.state.items}
            createNewItem={this.createNewItem}
            deleteItem={this.deleteItem}
            setActiveItem={this.setActiveItem}
            activeItemId={this.state.activeItem ? this.state.activeItem.itemId : null}
            disableActiveItem={this.disableActiveItem}
          />
        </Container>
        <Container>
          <CommentsList
            comments={activeItem ? activeItem.comments : []}
            createNewComment={this.createNewComment}
            activeItem={this.state.activeItem ? this.state.activeItem.position : null}
          />
        </Container>
      </div>
    );
  }
}

export default Main;