import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Banner } from "./Banner";
import "./ProductsBanners.css";

export const ProductsBanners = () => {
  const catalog = useSelector((state) => state.catalog);
  const newestAdditions = catalog?.slice(0, 3);
  const { t } = useTranslation(["main"]);

  return (
    <div className="banners-container">
      <h2 className="banners-main-text">{t("NEWEST_PRODUCTS")}</h2>
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
