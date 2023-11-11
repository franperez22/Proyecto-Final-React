import React from 'react';
import { useCart } from './CartContext';

const AddItemButton = ({ item }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(item);
  };

  return (
    <button className="add-to-cart-button" onClick={handleAddToCart}>
      Agregar al carrito
    </button>
  );
};

export default AddItemButton;
