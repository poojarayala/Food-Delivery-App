import React from "react";
import "./search.css";

export default function SearchBar({ onSearch }) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="🔍 Search..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}