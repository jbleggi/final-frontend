import { useState, useEffect } from 'react';
import './App.css'
import MainHeader from '../MainPage/MainHeader/MainHeader';
import SubscriptionContainer from '../MainPage/SubscriptionContainer/SubscriptionContainer';
import FilterComponent from '../MainPage/FilterComponent/FilterComponent';

export default function App() {
  const [subscriptions, setSubscriptions] = useState([]);
  const [error, setError] = useState('');
  const [activeOnly, setActiveOnly] = useState(false); 

  useEffect(() => { 
    getSubscriptions(); 
  }, []);

  function getSubscriptions() {
    fetch('http://localhost:3000/api/v1/subscriptions')
    .then(response => response.json())
    .then((data) => {
      console.log("Subscription Data: ", data);
      setSubscriptions(data.subscriptions);
    })
    .catch(error => {
      console.log(error.message);
      setError('Something went wrong. Refill your mug and try again!');
    });
  };

  // Handle checkbox change for the filter
  const handleCheckboxChange = (event) => {
    setActiveOnly(event.target.checked);
  };

  const filteredSubscriptions = subscriptions.filter(subscription => 
    activeOnly ? subscription.status === "active" : true
  );
  

  return (
    <main className='app'>
      <div className='main-page'>
        <MainHeader />

        <h2>Welcome, Shop Owner!</h2>
        <p>Select a subscription below to see more details.</p>
        
        <FilterComponent activeOnly={activeOnly} onCheckboxChange={handleCheckboxChange} />

        <SubscriptionContainer
          subscriptions={filteredSubscriptions}
          activeOnly={activeOnly}
        />
  
        <footer><a href="https://www.flaticon.com/free-icons/tea-bag" title="tea-bag icons">Tea-bag icon created by Freepik - Flaticon</a></footer>
        {error && <p className="error">{error}</p>}
      </div> 

    </main>
  );
}