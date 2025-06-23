import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./orders.css";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = () => {
      const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
      console.log("Fetched orders from localStorage:", storedOrders);
      setOrders(storedOrders);
      setLoading(false);
    };

    fetchOrders();
  }, []);

  const deleteOrder = (orderIdToDelete) => {
    if (window.confirm("Are you sure you want to delete this order?")) {
      const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
      const updatedOrders = storedOrders.filter(
        (order) => order.orderId !== orderIdToDelete
      );
      localStorage.setItem("orders", JSON.stringify(updatedOrders));
      setOrders(updatedOrders);
    }
  };

  return (
    <div className="orders-wrapper">
      <h1>🧾 My Orders</h1>

      <button onClick={() => navigate("/dashboard")} className="back-button">
        ⬅ Go to Dashboard
      </button>

      <div className="orders-container">
        {loading ? (
          <p>Loading orders...</p>
        ) : orders.length === 0 ? (
          <p>No orders placed yet.</p>
        ) : (
          orders.map((order, index) => (
            <div key={order.orderId || index} className="order-card">
              <h3>Order #{index + 1}</h3>
              <p><strong>Order ID:</strong> {order.orderId || "N/A"}</p>
              <p><strong>Placed At:</strong> {order.time || "N/A"}</p>
              <ul>
                {order.items &&
                  Object.entries(order.items).map(([item, quantity]) => (
                    <li key={item}>
                      {item} - Quantity: {quantity}
                    </li>
                  ))}
              </ul>
              <p><strong>Total:</strong> ₹{order.total || "0"}</p>

              <button
                className="delete-order-btn"
                onClick={() => deleteOrder(order.orderId || index)}
              >
                Delete Order
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
