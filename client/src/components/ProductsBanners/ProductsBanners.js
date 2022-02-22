import { useContext } from "react";
import { GlobalContext } from "../../App";
import { Banner } from "./Banner";
import "./ProductsBanners.css";

export const ProductsBanners = () => {
  const { catalog } = useContext(GlobalContext);
  const newestAdditions = catalog?.slice(0, 3);

  console.log(newestAdditions);

  return (
    <div className="banners-container">
      <h2 className="banners-main-text">NEWEST PRODUCTS</h2>

      {newestAdditions?.map((product) => (
        <Banner
          key={product.product_id}
          imgStyle={`url(${product.image})`}
          {...product}
        />
      ))}
    </div>
  );
};
