import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../../App";

export const ProductsList = ({ setCurrentProduct }) => {
  const { catalog } = useContext(GlobalContext);
  const [productsList, setProductsList] = useState([]);
  // const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setProductsList(catalog);
  }, [catalog]);

  const handleEdit = (product) => {
    setCurrentProduct(product);
  };
  return (
    <div className="products-list">
      <input type="text" placeholder="Search products by ID" />
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>{/* Image */}</th>
            <th>ID</th>
            <th>Model</th>
            <th>{/* View details */}</th>
            <th>{/* Edit Button */}</th>
            <th>{/* Delete Button */}</th>
          </tr>
        </thead>
        <tbody>
          {productsList?.length > 0 ? (
            productsList.map((product) => (
              <tr key={product.product_id} className="product-row">
                <td>
                  <img src={product.image} alt="" />
                </td>
                <td>{product.product_id}</td>
                <td>{product.model}</td>
                <td>
                  <Link className="dashboard-link" to="/details">
                    View details
                  </Link>
                </td>
                <td>
                  <button
                    className="edit-btn"
                    onClick={(e) => handleEdit(product)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button className="delete-btn">Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No products</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
