import React from 'react';

function ItemCard({ id, type }) {
  return (
    <div className="item-card">
      {/* PHOTO_URL */}
      {/* <h4>Item ID: {id}</h4> */}
      <h3>Tea Name: {id}</h3>
      <h4>Number of Bags Included: {id}</h4>
      <h4>Cost per Box: {id}</h4>
    </div>
  );
}

export default ItemCard;
