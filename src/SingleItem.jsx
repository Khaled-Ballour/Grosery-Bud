import { useState } from 'react';

const SingleItem = ({ id, name, completed, removeItem, editItem }) => {
  //   const [isChecked, setIsChecked] = useState(completed);
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => editItem(id)}
      />
      <p
        style={{
          textDecoration: completed && 'line-through',
          textTransform: 'capitalize',
        }}
      >
        {name}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => removeItem(id)}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
