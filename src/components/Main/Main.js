import React, { useCallback, useEffect, useMemo, useState } from 'react';
import CommentsList from '../Comments/CommentsList';
import Container from '../Container/Container';
import ItemsList from '../Items/ItemsList';

const Main = () => {
  const [items, setItems] = useState([]);
  const [activeItem, setaActiveItem] = useState(null);

  useEffect(() => {
    const items = localStorage.getItem('items');
    if (items) setItems(JSON.parse(items));

    const activeItem = localStorage.getItem('activeItem');
    if (activeItem) setaActiveItem(JSON.parse(activeItem))
  }, [])

  const createNewItem = useCallback((item) => {
    const newItem = {
      id: Math.random().toString(),
      title: item,
      comments: [],
    }
    const updateItems = items.concat(newItem);
    setItems(updateItems)
    localStorage.setItem('items', JSON.stringify(updateItems))
  }, [items])

  const createNewComment = useCallback((text) => {
    const newComent = {
      id: Math.random().toString(),
      text,
    }
    const updateItems = items.map(item => {
      if (item.id === activeItem.itemId) {
        return {
          ...item,
          comments: item.comments.concat(newComent),
        }
      } else {
        return item;
      }
    })
    setItems(updateItems)
    localStorage.setItem('items', JSON.stringify(updateItems))
  }, [items, activeItem])

  const setActive = useCallback((itemId) => {
    if (activeItem && itemId === activeItem.itemId) {
      setaActiveItem(null);
      localStorage.setItem('activeItem', JSON.stringify(null))
      return;
    }
    const numberItem = items.findIndex((item) => item.id === itemId);
    const newActiveItem = {
      itemId: itemId,
      position: "#" + (numberItem + 1),
    }
    setaActiveItem(newActiveItem);
    localStorage.setItem('activeItem', JSON.stringify(newActiveItem))
  }, [items, activeItem])

  const deleteItem = useCallback(async (itemId) => {
    if (itemId === activeItem) {
      setaActiveItem(null)
      localStorage.setItem('activeItem', JSON.stringify(null))
    }
    const updateItems = items.filter(item => item.id !== itemId);
    await setItems(updateItems)

    if (activeItem) {
      setActive(activeItem.itemId)
    }
  }, [activeItem, setActive, items])

  const comments = useMemo(() => {
    if (!activeItem) {
      return [];
    } else {
      return items.find(item => item.id === activeItem.itemId).comments
    }
  }, [activeItem, items])

  return (
    <div className="main">
      <Container>
        <ItemsList
          items={items}
          createNewItem={createNewItem}
          deleteItem={deleteItem}
          setActiveItem={setActive}
          activeItemId={activeItem ? activeItem.itemId : null}
        />
      </Container>
      <Container>
        <CommentsList
          comments={comments}
          createNewComment={createNewComment}
          activeItem={activeItem ? activeItem.position : null}
        />
      </Container>
    </div>
  );
}

export default Main;
