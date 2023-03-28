import { useState } from 'react';

const SingleItem = ({ id, name, completed, removeItem }) => {
  const [isChecked, setIsChecked] = useState(completed);
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <p
        style={{
          textDecoration: isChecked && 'line-through',
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
