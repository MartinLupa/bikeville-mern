import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { show } from "../../../redux/actions/popup";
const { REACT_APP_TOKEN: token, REACT_APP_API_CATALOG } = process.env;

export const ProductsList = ({
  setCurrentProduct,
  productsList,
  setIsEditing,
}) => {
  const dispatch = useDispatch();

  const handleEdit = (product) => {
    setCurrentProduct(product);
    setIsEditing(true);
  };

  const handleDelete = (product) => {
    dispatch(show("You are about to delete a product, are you sure?"));
    fetch(`${REACT_APP_API_CATALOG}/${product._id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        token: `Bearer ${token}`,
      },
    });
  };

  const handleViewDetails = (product) => {
    console.log(product);
  };

  const handleSwitchForm = () => {
    setIsEditing(false);
  };
  return (
    <div className="products-list">
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Prod.</th>
            <th>ID</th>
            <th>Model</th>
            <th>Details</th>
            <th>{/* Edit icon */}</th>
            <th>
              <AddBoxOutlinedIcon
                className="add-icon"
                onClick={handleSwitchForm}
              />
            </th>
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
                  <Link
                    onClick={() => handleViewDetails(product)}
                    className="dashboard-link"
                    to={`/dashboard/${product._id}`}
                  >
                    View details
                  </Link>
                </td>
                <td>
                  <ModeEditOutlineOutlinedIcon
                    className="edit-icon"
                    onClick={() => handleEdit(product)}
                  />
                </td>
                <td>
                  <DeleteForeverOutlinedIcon
                    className="delete-icon"
                    onClick={() => handleDelete(product)}
                  />
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
