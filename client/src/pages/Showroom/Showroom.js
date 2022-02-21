import { useContext } from "react";
import { GlobalContext } from "../../App";
import { Newsletter } from "../../components/Newsletter/Newsletter";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { ProductFilter } from "../../components/ProductFilter/ProductFilter";
import { TopScroll } from "../../components/TopScroll/TopScroll";
import "./Showroom.css";

export const Showroom = () => {
  const { catalog, setCatalog, filteredCatalog, setFilteredCatalog } =
    useContext(GlobalContext);

  let productsToRender;
  if (filteredCatalog?.length > 0) {
    productsToRender = filteredCatalog;
  } else {
    productsToRender = catalog;
  }

  return (
    <div className="lola">
      <TopScroll />
      <div className="main-container">
        <ProductFilter
          catalog={catalog}
          setCatalog={setCatalog}
          setFilteredCatalog={setFilteredCatalog}
        />
        {productsToRender?.map((product) => {
          return (
            <ProductCard
              key={product.product_id}
              id={product.product_id}
              {...product}
            />
          );
        })}
      </div>

      <div>
        <Newsletter />
      </div>
    </div>
  );
};
