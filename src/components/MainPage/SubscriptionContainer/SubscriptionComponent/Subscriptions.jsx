export default function Subscriptions() {
  const listSubscriptions = subscriptions.map(subscription => 
    <li key={subscription.id}>
      `Subscription Number {subscription.id}`
      {subscription.cost}
    </li>
  );
  
  return (
    <ul>{listSubscriptions}</ul>
  )
}