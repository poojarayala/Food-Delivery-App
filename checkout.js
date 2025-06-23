import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import hotels from "./hotels";
import "./checkout.css";

export default function Checkout() {
  const navigate = useNavigate();

  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || {};
  });

  function findItemPrice(itemName) {
    for (let hotel of hotels) {
      for (let category in hotel.menu) {
        let foundItem = hotel.menu[category].find(
          (menuItem) =>
            menuItem.item.trim().toLowerCase() === itemName.trim().toLowerCase()
        );
        if (foundItem) return foundItem.price;
      }
    }
    return 0;
  }

  const totalPrice = Object.entries(cart).reduce((total, [item, quantity]) => {
    return total + findItemPrice(item) * quantity;
  }, 0);

  const updateQuantity = (item, amount) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[item] + amount <= 0) {
        delete updatedCart[item];
      } else {
        updatedCart[item] += amount;
      }
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleOrder = () => {
    // Proceed to payment, keep cart intact
    navigate("/payment-selection", { state: { cart, totalPrice } });
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      {Object.keys(cart).length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <h2>🛒 Order Summary</h2>
          <ul className="cart-list">
            {Object.entries(cart).map(([item, quantity], index) => (
              <li key={index} className="cart-item">
                <span className="item-name">{item}</span>
                <div className="quantity-controls">
                  <button
                    className="quantity-btn"
                    onClick={() => updateQuantity(item, -1)}
                  >
                    -
                  </button>
                  <span className="quantity">{quantity}</span>
                  <button
                    className="quantity-btn"
                    onClick={() => updateQuantity(item, 1)}
                  >
                    +
                  </button>
                </div>
                <span className="item-price">₹{findItemPrice(item) * quantity}</span>
              </li>
            ))}
          </ul>
          <h3 className="total-price">Total Price: ₹{totalPrice}</h3>
          <button className="place-order-button" onClick={handleOrder}>
            Proceed to Pay
          </button>
          <button className="back-button" onClick={() => navigate(-1)}>
            Go Back
          </button>
        </div>
      )}
    </div>
  );
}
