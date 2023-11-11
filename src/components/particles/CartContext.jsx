import React, { createContext, useReducer, useContext } from 'react';

// acciones para el carrito
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

// Reducer para poder manejar el estado del carrito
const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
};

// crear el contexto del carrito
const CartContext = createContext();

// proveedor del contexto del carrito
const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, { items: [] });

  // funciones para agregar y eliminar elementos del carrito
  const addToCart = item => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  const removeFromCart = itemId => {
    dispatch({ type: REMOVE_FROM_CART, payload: itemId });
  };

  return (
    <CartContext.Provider value={{ cartState, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// hook personalizado para acceder al carrito
const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe utilizarse dentro de un CartProvider');
  }
  return context;
};

export { CartProvider, useCart };
