import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddProductsForm } from "../../components/AA-AdminDashboard/AddProductsForm/AddProductsForm";
import { AdminStats } from "../../components/AA-AdminDashboard/AdminStats/AdminStats";
import { ProductsList } from "../../components/AA-AdminDashboard/UpdateProduct/ProductsList";
import { UpdateProductsForm } from "../../components/AA-AdminDashboard/UpdateProduct/UpdateProductsForm";
import { fetchAndUpdateCatalog } from "../../helpers/fetchAndUpdateCatalog";
import useSEO from "../../hooks/useSEO";
import { setCatalog } from "../../redux/actions/catalog";
import "./Dashboard.css";
const { REACT_APP_API_CATALOG: CATALOG_URL, REACT_APP_TOKEN: token } =
  process.env;

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
  const catalog = useSelector((state) => state.catalog);
  const dispatch = useDispatch();
  const [currentProduct, setCurrentProduct] = useState(initialValues);
  const [productsList, setProductsList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  useSEO({ title: "Admin Dashboard" });

  useEffect(() => {
    fetchAndUpdateCatalog(CATALOG_URL, dispatch, setCatalog, token);
    // fetch(CATALOG_URL, {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Access-Control-Allow-Origin": "*",
    //     Authorization:
    //       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDgyNzk2YTNlNzY5NzcwOTE0ZjVhOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTU1NjM5NiwiZXhwIjoxNzI3ODY5OTk2fQ.2It5EWX_Pvxh2Di3z5zJ9kbIoDcM7ejW96KX534wllg",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => dispatch(setCatalog(data)));
    setProductsList(catalog);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [catalog, isEditing]);

  return (
    <div className="dashboard-container">
      <div className="dashboard-top">
        <AdminStats />
      </div>
      <div className="dashboard-bottom">
        {isEditing ? (
          <UpdateProductsForm
            setCatalog={setCatalog}
            currentProduct={currentProduct}
            setCurrentProduct={setCurrentProduct}
            initialValues={initialValues}
          />
        ) : (
          <AddProductsForm />
        )}
        <ProductsList
          setIsEditing={setIsEditing}
          productsList={productsList}
          setCurrentProduct={setCurrentProduct}
        />
      </div>
    </div>
  );
}
