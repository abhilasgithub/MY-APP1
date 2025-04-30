// Cart.js
import React from 'react';
import './Cart.css'; // Import a separate CSS file for Cart styling

const Cart = ({ onContinueShopping }) => {
  return (
    <div className="cart-page">
      <div className="cart-container">
        <h2 className="cart-heading">Cart</h2>
        <hr className="separator" />
        
        <div className="cart-content">
          {/* Here you can add cart items dynamically, currently it's just a placeholder */}
          <p>Your cart is currently empty. Add some items to your cart.</p>
        </div>
        
        {/* Centered button container */}
        <div className="button-container">
          <button type="button" className="btn" onClick={onContinueShopping}>Continue Shopping</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
