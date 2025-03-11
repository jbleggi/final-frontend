import { useState } from 'react';

function FilterableSubscriptionTable({ subscriptions }) {
  const [filterStatus, setFilterStatus] = useState('');
  const [activeOnly, setActiveOnly] = useState(false);

  // Handle checkbox state change
  const handleCheckboxChange = () => {
    setActiveOnly(!activeOnly); // Toggle the activeOnly state
  };

  return (
    <div>
      <FilterBar 
        activeOnly={activeOnly}
        onCheckboxChange={handleCheckboxChange} 
      />
      <SubscriptionTable 
        subscriptions={subscriptions} 
        activeOnly={activeOnly}
      />
    </div>
  );
}

function SubscriptionHeaderRow({ header }) {
  return (
    <tr>
      <th colSpan="3">
        {header}
      </th>
    </tr>
  );
}

function SubscriptionRow({ subscription }) {
  return (
    <tr>
      <td>{subscription.id}</td>
      <td>
        {subscription.status === 'canceled' ? (
          <span style={{ color: 'red' }}>{subscription.status}</span>
        ) : (
          subscription.status
        )}
      </td>
      <td>{subscription.cost}</td>
    </tr>
  );
}

function SubscriptionTable({ subscriptions, activeOnly }) {
  const rows = [];

  subscriptions.forEach((subscription) => {
    // If activeOnly is true, filter out canceled subscriptions
    if (activeOnly && subscription.status === 'canceled') {
      return; // Skip canceled subscriptions
    }

    rows.push(
      <SubscriptionRow 
        subscription={subscription}
        key={subscription.id}
      />
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Subscription #</th>
          <th>Status</th>
          <th>Cost</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function FilterBar({ activeOnly, onCheckboxChange }) {
  return (
    <form>
      <label>
        <input 
          type="checkbox" 
          checked={activeOnly} 
          onChange={onCheckboxChange}  // Handle checkbox change
        />
        {' '}
        Only active subscriptions
      </label>
    </form>
  );
}

const SUBSCRIPTIONS = [
  { id: 1, status: "active", cost: 14.35 },
  { id: 2, status: "active", cost: 14.35 },
  { id: 3, status: "canceled", cost: 14.35 },
  { id: 4, status: "active", cost: 14.35 },
  { id: 5, status: "canceled", cost: 14.35 },
  { id: 6, status: "active", cost: 14.35 },
];

export default function App() {
  return <FilterableSubscriptionTable subscriptions={SUBSCRIPTIONS} />;
}