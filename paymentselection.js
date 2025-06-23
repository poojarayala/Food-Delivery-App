import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./paymentselection.css";

export default function PaymentSelection() {
  const navigate = useNavigate();
  const location = useLocation();
  const totalPrice = location.state?.totalPrice || 0; // Get the total price
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);

  // Load Razorpay script dynamically
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => setRazorpayLoaded(true);
    document.body.appendChild(script);
  }, []);

  const handleOnlinePayment = () => {
    if (!razorpayLoaded) {
      alert("Razorpay SDK failed to load. Please check your internet connection.");
      return;
    }

    const options = {
      key: "rzp_test_3VSwTMhMyGcaN6", // Replace with your actual Razorpay Test Key
      amount: totalPrice * 100, // Convert to paisa
      currency: "INR",
      name: "Food Delivery",
      description: "Order Payment",
      image: "https://your-logo-url.com/logo.png", // Optional logo
      handler: function (response) {
        alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
        navigate("/confirmation", { state: { method: "Online Payment", totalPrice } });
      },
      prefill: {
        name: "Venkat", // Can be dynamic
        email: "venkat@example.com",
        contact: "7780201230",
      },
      theme: {
        color: "#F37254",
      },
      modal: {
        ondismiss: function () {
          alert("Payment window closed by user.");
        },
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <div className="payment-selection-container">
      <h1>Choose Payment Method</h1>
      <h3>Total Amount: ₹{totalPrice}</h3>

      {/* Razorpay Online Payment */}
      <button className="online" onClick={handleOnlinePayment} disabled={!razorpayLoaded}>
        💳 Online Payment
      </button>

      {/* Cash on Delivery */}
      <button
        className="cod"
        onClick={() => navigate("/confirmation", { state: { method: "Cash on Delivery", totalPrice } })}
      >
        🚚 Cash on Delivery
      </button>

      <button className="back-button" onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}

