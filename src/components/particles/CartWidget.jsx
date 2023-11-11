import React from 'react';
import { useCart } from './CartContext';

const CartWidget = () => {
  const { cartState } = useCart();

  // sirve para calcular la candidad de cosas en el carrito
  const totalItems = cartState.items.length;

  return (
    <div className="cart-widget">
      <i className="fas fa-shopping-cart"></i>
      <span className="cart-count">{totalItems}</span>
    </div>
  );
};

export default CartWidget;
