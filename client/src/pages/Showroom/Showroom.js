import { useContext, useEffect } from "react";
import { GlobalContext } from "../../App";
import { Newsletter } from "../../components/Newsletter/Newsletter";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { ProductFilter } from "../../components/ProductFilter/ProductFilter";
import { TopScroll } from "../../components/TopScroll/TopScroll";
import "./Showroom.css";
const { REACT_APP_API_CATALOG: CATALOG_URL } = process.env;

export const Showroom = () => {
  console.log(URL);
  const { catalog, setCatalog, filteredCatalog, setFilteredCatalog } =
    useContext(GlobalContext);

  let productsToRender;
  if (filteredCatalog?.length > 0) {
    productsToRender = filteredCatalog;
  } else {
    productsToRender = catalog;
  }
  useEffect(() => {
    fetch(CATALOG_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDgyNzk2YTNlNzY5NzcwOTE0ZjVhOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTU1NjM5NiwiZXhwIjoxNzI3ODY5OTk2fQ.2It5EWX_Pvxh2Di3z5zJ9kbIoDcM7ejW96KX534wllg",
      },
    })
      .then((response) => response.json())
      .then((data) => setCatalog(data));
  }, []);

  return (
    <div>
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
