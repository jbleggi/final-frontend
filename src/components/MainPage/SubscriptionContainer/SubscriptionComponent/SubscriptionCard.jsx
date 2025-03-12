// src/components/MainPage/SubscriptionContainer/SubscriptionComponent/SubscriptionCard.jsx
import './SubscriptionCard.css'


const SubscriptionCard = ({ id, cost, status }) => {
  const statusClass = status === 'active' ? 'active-status' : 'canceled-status';

  return (
    <div className='subscription-card'>
      <h3>{id}</h3>
      <p>Cost: {cost}</p>
      <p>Status: {status}</p>
    </div>
  );
}

export default SubscriptionCard;
