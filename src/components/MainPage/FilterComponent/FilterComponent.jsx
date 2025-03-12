// src/components/MainPage/FilterComponent/FilterComponent.jsx
import SubscriptionCard from "../SubscriptionContainer/SubscriptionCards/SubscriptionCard";
import SubscriptionContainer from "../SubscriptionContainer/SubscriptionContainer";

export default function FilterComponent({ activeOnly, onCheckboxChange }) {
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