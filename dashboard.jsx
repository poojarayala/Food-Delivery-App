import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import hotelsData from "./hotels";
import "./dashboard.css";
import "./styles.css";
import SearchBar from "./search";
import Categories from "./categories";

export default function Dashboard() {
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || {};
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  const hotels = Array.isArray(hotelsData) ? hotelsData : [];

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart((prevCart) => ({
      ...prevCart,
      [item.item]: (prevCart[item.item] || 0) + 1,
    }));
  };

  const filteredHotels = hotels.filter((hotel) =>
    (hotel.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hotel.location?.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (!selectedCategory || hotel.cuisine?.toLowerCase().includes(selectedCategory.toLowerCase()))
  );

  return (
    <div className="dashboard-container">
      <div className="header-icons">
        <div className="icon" onClick={() => navigate("/")}>🏠</div>
        <div className="icon" onClick={() => navigate("/checkout")}>🛒</div>
        <div className="icon" onClick={() => navigate("/orders")}>🧾</div>
      </div>

      {/* Filter Controls */}
      <Categories onSelectCategory={setSelectedCategory} />
      <SearchBar onSearch={setSearchQuery} />

      {/* Menu View */}
      {selectedHotel ? (
        <div className="menu-container">
          <button className="back-button" onClick={() => setSelectedHotel(null)}>← Back</button>
          <h2>{selectedHotel.name}</h2>
          <div className="menu-scrollable">
            {Object.entries(selectedHotel.menu || {}).map(([category, items]) => (
              <div key={category} className="menu-category">
                <h4>{category}</h4>
                <ul>
                  {items.map((item, index) => (
                    <li key={`${item.item}-${index}`} className="menu-item">
                      <span>{item.item} - ₹{item.price}</span>
                      <button
                        className="order-item-button"
                        onClick={() => addToCart(item)}
                      >
                        Order {cart[item.item] ? `(${cart[item.item]})` : ""}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Cart Preview */}
          {Object.keys(cart).length > 0 && (
            <div className="cart-container">
              <h3>🛒 Your Order Summary:</h3>
              <ul>
                {Object.entries(cart).map(([item, quantity], index) => (
                  <li key={index}>{item} - x{quantity}</li>
                ))}
              </ul>
              <button className="checkout-button" onClick={() => navigate("/checkout")}>
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      ) : (
        // Hotel List View
        <div>
          <h1>Hotels</h1>
          {filteredHotels.length === 0 ? (
            <p className="no-results">No hotels found matching your search.</p>
          ) : (
            <div className="hotels-container">
              {filteredHotels.map((hotel, index) => (
                <div
                  key={hotel.id || `hotel-${index}`}
                  className="hotel-card"
                  onClick={() => setSelectedHotel(hotel)}
                >
                  <img
                    src={hotel.image || "https://via.placeholder.com/300x200"}
                    alt={hotel.name}
                    className="hotel-image"
                  />
                  <h2>{hotel.name}</h2>
                  <p>{hotel.cuisine}</p>
                  <p>📍 {hotel.location}</p>
                  <p>⭐ {hotel.rating} | ⏳ {hotel.deliveryTime}</p>
                  <p>💰 {hotel.price}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
