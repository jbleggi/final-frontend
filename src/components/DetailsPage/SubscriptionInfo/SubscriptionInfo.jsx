import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DetailsHeader from '../DetailsHeader/DetailsHeader'
import ItemCard from '../ItemsContainer/ItemCard/ItemCard';
import EditSubscriptionStatus from './EditSubscriptionStatus/EditSubscriptionStatus';

export default function SubscriptionInfo() {
  const { id } = useParams();
  const [subscriptionDetails, setSubscriptionDetails] = useState(null);

  useEffect(() => {
    if (id) {
      console.log('Fetching subscription details for ID:', id); // Debug log to confirm ID

      fetch(`http://localhost:3000/api/v1/subscriptions/${id}`)
        .then(response => {
          if (!response.ok) {
            console.error('Error at fetch: ', response.status)
            throw new Error('Subscription not found');
          }
          return response.json();
        })
        // .then(data => console.log("Subscription Details: ", data))
        // .then(data => setSubscriptionDetails(data))
        .then(data => {
          console.log("Subscription Details: ", data);
          if (data && data.data) {
            console.log('Setting subscription details:', data); // Debug log
            setSubscriptionDetails(data);
          } else {
            console.error('No subscription data found');
          }
        })
        .catch(error => {
          console.error('Error:', error);
        });
    };
  }, [id]);

  if (!subscriptionDetails) {
    return(
      <section className='details-page'>
        <DetailsHeader />
        <><p>Loading subscription details...</p></>
      </section>
      );
  }

  const { attributes, relationships } = subscriptionDetails.data;
  const cost = parseFloat(attributes.cost).toFixed(2);

  const itemCards = relationships.items.data.map(item => {    
    return(
    <ItemCard
      key={item.id}
      id={item.id}
      />
    )
  });

  const customerInfo = relationships.customer.data.id


  return(
    <section className='details-page'>
      <DetailsHeader />
      <div className='subscription-info'>
        
        <h2>Subscription No. {attributes.id}</h2>
        <h2>Subscription Cost: ${cost}</h2>
        <h2>Subscription Status: {attributes.status}</h2>
        
        <EditSubscriptionStatus 
          attributes={attributes}
          setSubscriptionDetails={setSubscriptionDetails} 
        />

        <h2>Items:</h2>
        <div className='items-container'>
          {itemCards}
        </div>

        <h2>Customer ID:</h2>
        <p>{customerInfo}</p>
      </div>
    </section>
  );
}