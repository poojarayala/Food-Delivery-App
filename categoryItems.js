import React from "react";
import { useParams } from "react-router-dom";

export default function CategoryItems() {
  const { categoryName } = useParams();

  return (
    <div>
      <h2>{categoryName} Items</h2>
      <p>Display items related to {categoryName} here.</p>
    </div>
  );
}
