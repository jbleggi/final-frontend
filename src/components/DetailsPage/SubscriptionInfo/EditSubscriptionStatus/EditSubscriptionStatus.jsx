import React, { useState } from 'react';

const EditSubscriptionStatus = ({ attributes, setSubscriptionDetails }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
    const [newStatus, setNewStatus] = useState(attributes.status);

  const handleEditStatusClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleStatusChange = () => {
    setNewStatus((prevStatus) => (prevStatus === 'active' ? 'canceled' : 'active'));
  };

  const handleSaveStatus = async () => {
    const data = { status: newStatus };

    try {
      const response = await fetch(`http://localhost:3000/api/v1/subscriptions/${attributes.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to update subscription status');
      }

      const updatedSubscription = await response.json();
      console.log('Subscription status updated:', updatedSubscription);
      setSubscriptionDetails(updatedSubscription);

      setIsModalOpen(false);
    } catch (error) {
      console.error('Error updating subscription status:', error);
    }
  };

  return (
    <div>
      <button onClick={handleEditStatusClick}>Edit Status</button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Edit Subscription Status</h3>
            <label>
              <input
                type="checkbox"
                checked={newStatus === 'active'}
                onChange={handleStatusChange}
              />
              Active
            </label>
            <button onClick={handleSaveStatus}>Save</button>
            <button onClick={closeModal}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditSubscriptionStatus;
