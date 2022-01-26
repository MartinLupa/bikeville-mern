import { useState } from "react";
import { ProductsList } from "../../components/AA-AdminDashboard/UpdateProduct/ProductsList";
import { UpdateProductsForm } from "../../components/AA-AdminDashboard/UpdateProduct/UpdateProductsForm";
import "./Dashboard.css";

export default function Dashboard() {
  const [currentProduct, setCurrentProduct] = useState({});

  return (
    <div className="dashboard-container">
      <UpdateProductsForm currentProduct={currentProduct} />
      <ProductsList setCurrentProduct={setCurrentProduct} />
    </div>
  );
}
