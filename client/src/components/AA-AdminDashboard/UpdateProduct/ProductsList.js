import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../App";
import { CartItemButton } from "../../CartItemButton/CartItemButton";

export const ProductsList = ({ setCurrentProduct }) => {
  const { catalog } = useContext(GlobalContext);
  const [productsList, setProductsList] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setProductsList(catalog);
  }, []);

  const handleEdit = (product) => {
    setCurrentProduct(product);
  };
  return (
    <div className="products-list">
      <h2>Search for products</h2>
      <label htmlFor="">Search for products: </label>
      <input type="text" placeholder="Search products by ID" />
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>{/* Image */}</th>
            <th>ID</th>
            <th>Model</th>
            <th>In stock</th>
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
                <td>{product.inStock ? "Yes" : "No"}</td>
                <td>
                  <CartItemButton
                    passedEvent={(e) => handleEdit(product)}
                    className="edit-btn"
                    text={"Edit"}
                  />
                </td>
                <td>
                  <CartItemButton text={"Delete"} />
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
