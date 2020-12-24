import React from 'react';
import './Item.scss';

const Item = ({title, comments, deleteItem, id, activeItemId, setActiveItem}) => {
  const handleActiveItem = (itemId) => {
    if (itemId === activeItemId) {
      setActiveItem(null)
    } else {
      setActiveItem(itemId)
    }
  }

  return (
    <div className="item">
      {activeItemId === id && <div className="item_active"></div>}
      <div className="item-title" onClick={() => handleActiveItem(id)}>
        <span className="item-title__name">{title}</span>
        <span className="item-title__count">{comments}</span>
      </div>
      <button className="item__btn" onClick={() => deleteItem(id)}>Delete</button>
    </div>
  );
}

export default Item;
