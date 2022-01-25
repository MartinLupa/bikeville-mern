import React, { useState } from "react";

export const ProductsList = () => {
  const [productsList, setProductsList] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  return (
    <div className="products-list">
      <h2>Search for products</h2>
      <label htmlFor="">Search for products: </label>
      <input type="text" Placeholder="Search products by ID" />
      <table>
        <thead>
          <tr>
            <th>{/* Image */}</th>
            <th>ID</th>
            <th>Model</th>
            <th>In stock</th>
          </tr>
        </thead>
        <tbody>{}</tbody>
      </table>
    </div>
  );
};
