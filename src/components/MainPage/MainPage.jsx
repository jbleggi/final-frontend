import  { useState, useEffect } from 'react';
import Logo from '../public/favicon.ico';

function fetchMain(){
  const [subscriptions, setSubscriptions] = useState({});
  const [error, setError] = useState("");


  function getSubscriptions() {
    fetch('http://localhost:3001/api/v1/subscriptions')
    .then(response => response.json())
    .then((data) => {
      setSubscriptions(data.subscriptions);
    })
    .catch(error => console.log(error.message))
  };

  useEffect(() => {
    getSubscriptions();
  }, []);

  return (
    <main className="mainPage">
      <nav className="main-header">
        <img src={Logo} alt="Tea Time Logo" className="App-logo"></img>
        <h1>Title: Tea Time</h1>
        <h2>Welcome, Shop Owner!</h2>
        <p>Select a subscription below to get started.</p>
      </nav>

      <nav className="filter-component">

      </nav>

      <nav className="subscription-container">
        
      </nav>

    </main>
  )

}