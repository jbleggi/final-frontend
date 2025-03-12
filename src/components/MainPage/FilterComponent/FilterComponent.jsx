import React from 'react';

export default function FilterComponent( activeOnly, onActiveChange ) {
  const handleCheckboxChange = (e) => {
    onActiveChange(e.target.checked)
  }

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