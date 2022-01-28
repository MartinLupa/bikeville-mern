import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../App";
import { ProductsList } from "../../components/AA-AdminDashboard/UpdateProduct/ProductsList";
import { UpdateProductsForm } from "../../components/AA-AdminDashboard/UpdateProduct/UpdateProductsForm";
import { fetchAndUpdateCatalog } from "../../helpers/fetchAndUpdateCatalog";
import "./Dashboard.css";
const { REACT_APP_API_CATALOG: CATALOG_URL } = process.env;

const initialValues = {
  model: "",
  trail_type: "",
  product_id: "",
  image: "",
  short_description: "",
  description: "",
  type: "",
  brake_type: "",
  groupset: "",
  sizes: [],
  net_price: "",
  vat: "",
  full_price: "",
  inStock: true,
};

export default function Dashboard() {
  const { catalog, setCatalog } = useContext(GlobalContext);
  const [currentProduct, setCurrentProduct] = useState(initialValues);
  const [productsList, setProductsList] = useState([]);

  fetchAndUpdateCatalog(CATALOG_URL, setCatalog);

  useEffect(() => {
    setProductsList(catalog);
  }, [catalog]);

  return (
    <div className="dashboard-container">
      <UpdateProductsForm
        setCatalog={setCatalog}
        currentProduct={currentProduct}
        setCurrentProduct={setCurrentProduct}
        initialValues={initialValues}
      />
      <ProductsList
        productsList={productsList}
        setCurrentProduct={setCurrentProduct}
      />
    </div>
  );
}
