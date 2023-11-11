import React, { useState } from 'react';

const ItemQuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = event => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);
  };

  return (
    <div className="item-quantity-selector">
      <label>Cantidad:</label>
      <input
        type="number"
        value={quantity}
        onChange={handleQuantityChange}
        min="1"
      />
    </div>
  );
};

export default ItemQuantitySelector;
