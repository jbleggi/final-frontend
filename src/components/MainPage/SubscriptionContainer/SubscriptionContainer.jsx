import React, { useState, useEffect } from 'react';
import MainHeader from '../MainHeader/MainHeader';
import SubscriptionCard from './SubscriptionCards/SubscriptionCard';
import FilterComponent from '../FilterComponent/FilterComponent';
import './SubscriptionContainer.css';


export default function SubscriptionContainer( ) {
  const [subscriptions, setSubscriptions] = useState([]);
  const [activeOnly, setActiveOnly] = useState(false);

  const handleActiveOnlyChange = (newState) => {
    setActiveOnly(newState);
  };

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/subscriptions')
      .then(response => response.json())
      .then(data => {
        console.log("Subscription Data: ", data);
        setSubscriptions(data.subscriptions);
      })
      .catch((error) => console.error("Error loading subscriptions: ", error.message)); 
  }, []);

  let filteredSubscriptionData 
  
  if (activeOnly){
    filteredSubscriptionData = subscriptions.filter(subscription => subscription.status === "active")
  } else {
    filteredSubscriptionData = subscriptions
  }

  const subscriptionCards = filteredSubscriptionData.map(subscription => {
    const cost = `$${parseFloat(subscription.cost).toFixed(2)}`;
    return (
      <SubscriptionCard
        key={subscription.id}
        id={subscription.id}
        status={subscription.status}
        cost={cost}
      />
    )
  });

  return (
    <section>
      <div className='main-welcome'>
        <MainHeader />
        <h2>Welcome, Shop Owner!</h2>
        <h3>Select a subscription below to see more details.</h3>
      </div>
      <div className='filter-component'>
        <FilterComponent 
          activeOnly={activeOnly}
          onActiveChange={handleActiveOnlyChange} 
        />
        <p>{activeOnly ? 'Showing only active subscriptions.' : 'Showing all subscriptions.'}</p>
      </div>

      <div className='subscription-container'>
        {subscriptionCards}
      </div>
    </section>
  );
}