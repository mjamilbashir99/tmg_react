// CartContext.js
import React, { createContext, useState, useContext } from 'react';

// Create a Context for the cart
const CartContext = createContext();

// Custom hook to use CartContext
export const useCart = () => {
  return useContext(CartContext);
};

// CartProvider component to wrap the app and provide the cart state
export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(prevCount => prevCount + 1); // Increment cart count
  };

  return (
    <CartContext.Provider value={{ cartCount, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
