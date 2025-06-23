import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ cart, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const totalItems = Object.values(cart || {}).reduce((sum, qty) => sum + qty, 0);

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <nav className="navbar">
      <Link to="/dashboard" className="logo">Venky</Link>

      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search hotels..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">🔍</button>
      </form>

      <div className="nav-links">
        <Link to="/login">Login</Link>
        <Link to="/checkout">Checkout</Link>
        <Link to="/cart" className="nav-icon cart-icon">
          🛒 {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
