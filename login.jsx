import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });
  
      if (res.data && res.data.token) {
        localStorage.setItem("token", res.data.token);
        alert("Login successful!");
        navigate("/dashboard");
      } else {
        alert("Unexpected response from server.");
      }
  
    } catch (err) {
      console.error("Login failed:", err.response?.data || err.message);
      
      if (err.response && err.response.status === 400) {
        alert(err.response.data.msg); // "Login failed. Check email and password."
      } else {
        alert("Login failed. Please try again.");
      }
    }
  };
  
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <input 
              type="email" 
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
}
