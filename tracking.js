import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import "./tracking.css";

export default function Tracking() {
  const navigate = useNavigate();
  const [status, setStatus] = useState("Order Placed");

  // Memoize the status steps to prevent unnecessary recalculations
  const statusSteps = useMemo(() => [
    "Order Placed",
    "Preparing Food 🍲",
    "Out for Delivery 🚚",
    "Delivered ✅"
  ], []); // Empty dependency array ensures it's memoized once

  // Fetch the order tracking from localStorage
  useEffect(() => {
    const storedTracking = JSON.parse(localStorage.getItem("orderTracking"));
    if (storedTracking) {
      setStatus(storedTracking.status); // Set initial status from localStorage
    }
  }, []);

  // Auto-update tracking status every 2 minutes (120,000ms)
  useEffect(() => {
    const interval = setInterval(() => {
      setStatus((prevStatus) => {
        const currentIndex = statusSteps.indexOf(prevStatus);
        return currentIndex < statusSteps.length - 1 ? statusSteps[currentIndex + 1] : prevStatus;
      });
    }, 120000); // 2 minutes

    return () => clearInterval(interval);
  }, [statusSteps]);

  // Save updated status back to localStorage
  useEffect(() => {
    const storedTracking = JSON.parse(localStorage.getItem("orderTracking"));
    if (storedTracking) {
      storedTracking.status = status; // Update status in localStorage
      localStorage.setItem("orderTracking", JSON.stringify(storedTracking));
    }
  }, [status]);

  return (
    <div className="tracking-container text-center p-4">
      <h1 className="text-xl font-bold mb-2">📍 Order Tracking</h1>
      <h3>Current Status: <span className="status">{status}</span></h3>
      <button className="back-button" onClick={() => navigate("/dashboard")}>Home</button>
    </div>
  );
}
