import React, { useState } from 'react';

export default function FilterComponent({ onActiveChange }) {
  const [activeOnly, setActiveOnly] = useState(false);

  const handleCheckboxChange = (e) => {
    const newState = e.target.checked;
    setActiveOnly(newState);
    onActiveChange(newState); 
  };

  return (
    <form>
      <label>
        <input 
          type="checkbox" 
          checked={activeOnly} 
          onChange={handleCheckboxChange}
        />
        {' '}
        Only active subscriptions
      </label>
    </form>
  );
}