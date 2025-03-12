import './SubscriptionCard.css';
import { Link } from 'react-router-dom';

export default function SubscriptionCard({ id, cost, status, customer_id }) {
  return(
  <div className = 'subscription-card'>
    <Link to={`/subscriptions/${id}`} className="subscription-card">
      <h3>Subscription No. {id}</h3>
      <p>Cost: {cost}</p>
      <p>Status: {status}</p>
      <p>Customer: {customer_id}</p>
    </Link>
  </div>
  )
};