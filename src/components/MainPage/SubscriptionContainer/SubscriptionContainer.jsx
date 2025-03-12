import React, { useState, useEffect } from 'react';
import FilterComponent from '../FilterComponent/FilterComponent';
import SubscriptionCard from './SubscriptionCards/SubscriptionCard';
import './SubscriptionContainer.css';

export default function SubscriptionContainer( ) {
  const [subscriptions, setSubscriptions] = useState([]);
  const [activeOnly, setActiveOnly] = useState(false);
  function onActiveChange () { setActiveOnly};

  let filteredSubscriptions = [];

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/subscriptions')
      .then(response => response.json())
      .then(data => {
        console.log("Subscription Data: ", data);
        setSubscriptions(data.subscriptions);
      })
      .catch((error) => console.error("Error loading: ", error.message)); 
  }, []);

  useEffect(() => {
    console.log('Checkbox clicked:', activeOnly);
  }, [activeOnly])

  
  //   if (activeOnly) {
  //     filteredSubscriptions = subscriptions.filter(subscription => subscription.status === 'active');
  //   } else {
  //     filteredSubscriptions = subscriptions;
  //   }

  // let content;
  //   if (filteredSubscriptions.length === 0) {
  //     content = <p>No subscriptions available</p>;
  //   } else {
  //     content = filteredSubscriptions.map(subscription => (
  //       <SubscriptionCard key={subscription.id} {...subscription} />
  //     ));
  //   }

  subscriptions.forEach((subscription) => {
    if (activeOnly && subscription.status === 'active') {filteredSubscriptions.push (
      <SubscriptionCard key={subscription.id} {...subscription} />
    )}
    else if (!activeOnly) {filteredSubscriptions.push (
      <SubscriptionCard key={subscription.id} {...subscription} />
    )}
  })

  return (
    <div className="subscription-container">
      <FilterComponent activeOnly={activeOnly} onActiveChange={onActiveChange} />
      <SubscriptionCard />
    </div>
  );
}
