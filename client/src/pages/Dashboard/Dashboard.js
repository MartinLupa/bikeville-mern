import { useState } from "react";
import { AddProductsForm } from "../../components/AA-AdminDashboard/AddProductsForm/AddProductsForm";
import "./Dashboard.css";

export default function Dashboard() {
  const [adminAction, setAdminAction] = useState("add");

  const handleAdminAction = (e) => {
    setAdminAction(e.target.value);
  };
  return (
    <div className="dashboard-container">
      <select onChange={handleAdminAction} name="" id="">
        <option value="add">Add product</option>
        <option value="get">Get product by ID</option>
        <option value="update">Update product</option>
        <option value="delete">Delete product</option>
      </select>

      {adminAction === "add" && <AddProductsForm />}
      {adminAction === "get" && <h2>GET</h2>}
      {adminAction === "update" && <h2>UPDATE</h2>}
      {adminAction === "delete" && <h2>DELETE</h2>}
    </div>
  );
}
