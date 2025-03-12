// src/components/MainPage/FilterComponent/FilterComponent.jsx

export default function FilterBar({ activeOnly, onCheckboxChange }) {
  return (
    <form>
      <label>
        <input 
          type="checkbox" 
          checked={activeOnly} 
          onChange={onCheckboxChange} 
        />
        {' '}
        Only active subscriptions
      </label>
    </form>
  );
};