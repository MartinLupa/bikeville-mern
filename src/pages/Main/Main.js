import { useContext, useEffect } from "react";
import { GlobalContext } from "../../App";
import Newsletter from "../../components/Newsletter/Newsletter";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductFilter from "../../components/ProductFilter/ProductFilter";
import "./Main.css";

export default function Main() {
  const { catalog, setCatalog } = useContext(GlobalContext);

  useEffect(() => {
    fetch("catalog.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setCatalog(data.bicycles));
  }, []);

  return (
    <div>
      <div className="main-container">
        <ProductFilter />
        {catalog?.map((product) => {
          return (
            <ProductCard
              key={product.product_id}
              id={product.product_id}
              img={product.image}
              model={product.model}
              type={product.type}
              full_price={product.full_price}
            />
          );
        })}
      </div>
      <div>
        <Newsletter />
      </div>
    </div>
  );
}
