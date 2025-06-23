import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./confirmation.css";

export default function Confirmation() {
  const navigate = useNavigate();
  const location = useLocation();
  const method = location.state?.method || "Unknown Payment Method";

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || {};
    const totalPrice = location.state?.totalPrice || 0;

    if (Object.keys(cart).length > 0) {
      const newOrder = {
        orderId: "ORD" + Date.now(), // unique order id
        time: new Date().toLocaleString(), // order time
        items: cart,
        total: totalPrice,
        paymentMethod: method,
      };

      const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
      const updatedOrders = [...existingOrders, newOrder];

      localStorage.setItem("orders", JSON.stringify(updatedOrders));
      localStorage.removeItem("cart");
    }
  }, [location.state, method]); // react-hooks best practice

  return (
    <div className="confirmation-container">
      <h1>🎉 Order Placed Successfully!</h1>
      <h2>Payment Method: <strong>{method}</strong></h2>
      <p>Thank you for your order. Your transaction has been completed.</p>

      <button className="dashboard-button" onClick={() => navigate("/dashboard")}>
        Go to Dashboard
      </button>

      <button className="track-button" onClick={() => navigate("/track-order")}>
        Track Order 🚚
      </button>
    </div>
  );
}
