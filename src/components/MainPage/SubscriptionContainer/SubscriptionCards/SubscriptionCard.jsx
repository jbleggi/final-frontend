// src/components/MainPage/SubscriptionContainer/SubscriptionComponent/SubscriptionCard.jsx
import './SubscriptionCard.css'
import { Link } from 'react-router-dom';


const SubscriptionCard = ({ id, cost, status, customer_id }) => {

  return (
    
      <div className='subscription-card'>
        <Link to={`/subscriptions/${id}`}>
          <h3>Subscription No. {id}</h3>
          <p>Cost: {cost}</p>
          <p>Status: {status}</p>
          <p>Customer: {customer_id}</p>
        </Link>
      </div>

  );
}

export default SubscriptionCard;
