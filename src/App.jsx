import { useState, useEffect } from 'react';
import './App.css'
import Logo from '../public/favicon.ico';
import SubscriptionContainer from './components/MainPage/SubscriptionContainer/SubscriptionContainer';

export default function App() {
  const [subscriptions, setSubscriptions] = useState([]);
  const [error, setError] = useState('');
  const [activeOnly, setActiveOnly] = useState(false); // State to track active only filter

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
      setError('Something went wrong. Refresh your mug and try again!');
    });
  };

  // Handle checkbox change for the filter
  const handleCheckboxChange = (event) => {
    setActiveOnly(event.target.checked);
  };

  // Filter the subscriptions based on the 'activeOnly' flag
  const filteredSubscriptions = activeOnly
    ? subscriptions.filter(subscription => subscription.isActive)
    : subscriptions;

  return (
    <main className='app'>
      <div className='main-header'>
        <img src={Logo} alt="Tea Time Logo" className="app-logo" />
        <h1>Tea Time</h1>
        <h2>Welcome, Shop Owner!</h2>
        <p>Select a subscription below to see more details.</p>
        
        <SubscriptionContainer
          subscriptions={filteredSubscriptions} // Pass filtered subscriptions
          activeOnly={activeOnly}
        />
        
        {error && <p className="error">{error}</p>}
      </div>
    </main>
  );
}