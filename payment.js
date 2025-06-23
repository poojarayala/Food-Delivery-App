import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./paymentselection.css";

export default function PaymentSelection() {
  const navigate = useNavigate();
  const location = useLocation();
  const totalPrice = location.state?.totalPrice || 0; // Get the total price

  return (
    <div className="payment-selection-container">
      <h1>Choose Payment Method</h1>
      <h3>Total Amount: ₹{totalPrice}</h3>

      <button className="payment-button online" 
        onClick={() => navigate("/payment", { state: { method: "Online", totalPrice } })}>
        💳 Online Payment
      </button>

      <button className="payment-button cod" 
        onClick={() => navigate("/confirmation", { state: { method: "Cash on Delivery" } })}>
        🚚 Cash on Delivery
      </button>

      <button className="back-button" onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}