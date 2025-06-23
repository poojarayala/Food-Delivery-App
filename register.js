import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./register.css";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    address: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the form data to the backend
      const res = await axios.post("http://localhost:5000/api/auth/register", formData);

      console.log("Registration response:", res.data);
      alert("Registration successful!");
      
      // Navigate to the dashboard instead of login page
      navigate("/dashboard");
    } catch (err) {
      console.error("Registration failed:", err.response?.data || err.message);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Contact Number</label>
            <input
              type="tel"
              name="contact"
              placeholder="Enter your contact number"
              value={formData.contact}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Address</label>
            <input
              type="text"
              name="address"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Create Password</label>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="register-button">Register</button>
        </form>
        
      </div>
    </div>
  );
}
