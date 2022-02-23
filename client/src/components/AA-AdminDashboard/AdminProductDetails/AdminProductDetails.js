import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { GeneralButton } from "../../GeneralButton/GeneralButton";
import "./AdminProductDetails.css";

export const AdminProductDetails = () => {
  const { id } = useParams();
  const catalog = useSelector((state) => state.catalog);
  const navigate = useNavigate();

  const filteredProduct = catalog?.filter((product) => product._id === id);
  const {
    _id: internal_id,
    product_id,
    image,
    model,
    type,
    brake_type,
    trail_type,
    groupset,
    sizes,
    description,
    createdAt,
    updatedAt,
    net_price,
    vat,
    full_price,
    supplier,
  } = filteredProduct[0];

  const handleDashboardReturn = () => {
    navigate("/dashboard");
  };

  return (
    <div className="dashboard-details-container">
      <table className="dashboard-details-table">
        <thead>
          <tr>
            <th>{/* Concept */}</th>
            <th>{/* Data */}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <b>Internal ID</b>
            </td>
            <td>{internal_id}</td>
          </tr>
          <tr>
            <td>
              <b>Customer ID</b>
            </td>
            <td>{product_id}</td>
          </tr>
          <tr>
            <td>
              <b>Model</b>
            </td>
            <td>{model}</td>
          </tr>
          <tr>
            <td>
              <b>Type</b>
            </td>
            <td>{type}</td>
          </tr>
          <tr>
            <td>
              <b>Brake Type</b>
            </td>
            <td>{brake_type}</td>
          </tr>
          <tr>
            <td>
              <b> Trail Type</b>
            </td>
            <td>{trail_type}</td>
          </tr>
          <tr>
            <td>
              <b> Groupset</b>
            </td>
            <td>{groupset}</td>
          </tr>
          <tr>
            <td>
              <b> Sizes</b>
            </td>
            <td className="sizes-td">
              {sizes.map((size) => (
                <p>{size}</p>
              ))}
            </td>
          </tr>
          <tr>
            <td>
              <b> Description</b>
            </td>
            <td>{description}</td>
          </tr>
          <tr>
            <td>
              <b>Created At</b>
            </td>
            <td>{createdAt}</td>
          </tr>
          <tr>
            <td>
              <b>Last updated</b>
            </td>
            <td>{updatedAt}</td>
          </tr>
          <tr>
            <td>
              <b>Net Price</b>
            </td>
            <td>{net_price}</td>
          </tr>
          <tr>
            <td>
              <b>VAT</b>
            </td>
            <td>{vat}</td>
          </tr>
          <tr>
            <td>
              <b>Total Price</b>
            </td>
            <td>{full_price}</td>
          </tr>
          <tr>
            <td>
              <b>Supplier</b>
            </td>
            <td>{supplier}</td>
          </tr>
        </tbody>
      </table>
      <div className="secondary-container">
        <img src={image} alt="" />
        <GeneralButton
          passedEvent={handleDashboardReturn}
          text={"BACK TO DASHBOARD"}
        />
      </div>
    </div>
  );
};
