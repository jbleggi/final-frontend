import './SubscriptionCard.css';
import { Link } from 'react-router-dom';

export default function SubscriptionCard({ id, cost, status }) {
  return(
  
    <Link to={`/subscriptions/${id}`}>
      <div className = 'subscription-card'>
      <h3>Subscription No. {id}</h3>
      <p>Cost: {cost}</p>
      <p>Status: {status}</p>
      </div>
    </Link>

  )
};