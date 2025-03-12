import React, { useState } from 'react'; 
import FilterBar from '../FilterComponent/FilterComponent';
import SubscriptionCard from "./SubscriptionComponent/SubscriptionCard"; 
import './SubscriptionContainer.css'
export default function SubscriptionContainer({ subscriptions }) {
  const [activeOnly, setActiveOnly] = useState(false); 

  const handleCheckboxChange = () => {
    setActiveOnly(!activeOnly); 
  };

  const filteredSubscriptions = activeOnly
    ? subscriptions.filter(subscription => subscription.status === 'active')
    : subscriptions;

  return (
    <div className="subscription-container">
      <FilterBar activeOnly={activeOnly} onCheckboxChange={handleCheckboxChange} />
      
      {filteredSubscriptions.length === 0 ? (
        <p>No subscriptions available</p>
      ) : (
        filteredSubscriptions.map((subscription) => (
          <SubscriptionCard
            key={subscription.id}
            id={subscription.id}
            cost={subscription.cost}
            status={subscription.status}
          />
        ))
      )}
    </div>
  );
}
