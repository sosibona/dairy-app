import React from 'react';
import CreateItemInput from './CreateItemInput';
import Item from './Item';

const ItemsList = ({ items, createNewItem, activeItemId, setActiveItem, deleteItem }) => {
  const itemsList = items.map(item => (
    <Item
      key={item.id}
      id={item.id}
      title={item.title}
      comments={item.comments.length}
      deleteItem={deleteItem}
      setActiveItem={setActiveItem}
      activeItemId={activeItemId}
    />
  ))
  return (
    <div>
      <span className="container__title">Items</span>
      <CreateItemInput createNewItem={createNewItem} />
      <div className="items">
        {itemsList}
      </div>
    </div>
  );
}

export default ItemsList;
