import { Link } from "react-router-dom";
import { AddProductsForm } from "../../components/AA-AdminDashboard/AddProductsForm/AddProductsForm";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-links">
        <Link to="/dashboard">Add product</Link>
        <Link to="/dashboard">Orders</Link>
      </div>
      <AddProductsForm />
    </div>
  );
}
