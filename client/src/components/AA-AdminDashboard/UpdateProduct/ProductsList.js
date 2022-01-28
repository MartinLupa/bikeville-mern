import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import React from "react";
import { Link } from "react-router-dom";

export const ProductsList = ({ setCurrentProduct, productsList }) => {
  // const [filteredProducts, setFilteredProducts] = useState([]);

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
            <th>{/* Edit icon */}</th>
            <th>{/* Delete icon */}</th>
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
                  <ModeEditOutlineOutlinedIcon
                    className="edit-icon"
                    onClick={(e) => handleEdit(product)}
                  />
                </td>
                <td>
                  <DeleteForeverOutlinedIcon className="delete-icon" />
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
