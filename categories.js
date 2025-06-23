import React, { useState } from "react";
import "./categories.css";

export default function Categories({ onSelectCategory }) {
  const categories = ["Biryani", "Indian", "Chinese", "Andhra", "Fast Food"];
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
      onSelectCategory(null);
    } else {
      setSelectedCategory(category);
      onSelectCategory(category);
    }
  };

  return (
    <div className="categories-container">
      {categories.map((category, index) => (
        <button
          key={index}
          className={`category-btn ${selectedCategory === category ? "active" : ""}`}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
