import React, { useCallback, useEffect, useMemo, useState } from 'react';
import CommentsList from '../Comments/CommentsList';
import Container from '../Container/Container';
import ItemsList from '../Items/ItemsList';

const Main = () => {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('items')) || []);
  const [activeItem, setActiveItemHook] = useState(JSON.parse(localStorage.getItem('activeItem')) || null);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items])

  useEffect(() => {
    localStorage.setItem('activeItem', JSON.stringify(activeItem));
  }, [activeItem])

  const createNewItem = useCallback((text) => {
    const newItem = {
      id: Math.random().toString(),
      title: text,
      comments: [],
    }
    const updateItems = items.concat(newItem);
    setItems(updateItems)
  }, [items])

  const createNewComment = useCallback((text) => {
    const newComent = {
      id: Math.random().toString(),
      text,
    }
    const updateItems = items.map(item => {
      if (item.id === activeItem) {
        return {
          ...item,
          comments: item.comments.concat(newComent),
        }
      } else {
        return item;
      }
    })
    setItems(updateItems)
  }, [activeItem, items]);

  const deleteItem = useCallback(itemId => {
    if (itemId === activeItem) {
      setActiveItemHook(null)
    }
    const updateItems = items.filter(item => item.id !== itemId);
    setItems(updateItems)
  }, [items, setItems, activeItem]);

  const comments = useMemo(() => {
    if (!activeItem) {
      return [];
    } else {
      return items.find(item => item.id === activeItem).comments
    }
  }, [activeItem, items])

  const positionActiveItem = useMemo(() => {
    if (!activeItem) {
      return null;
    } else {
      return items.findIndex(item => item.id === activeItem) + 1;
    }
  }, [activeItem, items])

  return (
    <div className="main">
      <Container>
        <ItemsList
          items={items}
          createNewItem={createNewItem}
          deleteItem={deleteItem}
          setActiveItem={setActiveItemHook}
          activeItemId={activeItem}
        />
      </Container>
      <Container>
        <CommentsList
          comments={comments}
          createNewComment={createNewComment}
          positionActiveItem={positionActiveItem}
          activeItemId={activeItem}
        />
      </Container>
    </div>
  );
}

export default Main;
