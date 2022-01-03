import { useContext, useEffect } from "react";
import { GlobalContext } from "../../App";
import Newsletter from "../../components/Newsletter/Newsletter";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductFilter from "../../components/ProductFilter/ProductFilter";
import { TopScroll } from "../../components/TopScroll/TopScroll";
import "./Main.css";

export default function Main() {
  const { catalog, setCatalog, filteredCatalog } = useContext(GlobalContext);
  let productsToRender;
  if (filteredCatalog?.length > 0) {
    productsToRender = filteredCatalog;
  } else {
    productsToRender = catalog;
  }
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
      <TopScroll />
      <div className="main-container">
        <ProductFilter />

        {productsToRender?.map((product) => {
          return (
            <ProductCard
              key={product.product_id}
              id={product.product_id}
              img={product.image}
              model={product.model}
              short_description={product.short_description}
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
