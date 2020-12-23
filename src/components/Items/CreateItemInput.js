import React, { useCallback, useState } from 'react';
import './CreateItemInput.scss';

const CreateItemInput = ({ createNewItem }) => {
  const [item, setItem] = useState("");

  const createItem = useCallback(() => {
    if (!item) return;
    createNewItem(item)
    setItem("")
  }, [createNewItem, item]);

  return (
    <div className="create-item">
      <input
        className="create-item__input"
        placeholder="Type name here..."
        type="text"
        value={item}
        onChange={(event) => setItem(event.target.value)}
      />
      <button
        className="create-item__btn"
        onClick={createItem}
      >
        Add new
      </button>
    </div>
  );
}

export default CreateItemInput;
