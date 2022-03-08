import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setProductID } from "../../redux/actions/productID";
import "./ProductsBanners.css";

export const Banner = ({ imgStyle, model, product_id }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation(["main"]);

  let backgroundImageStyle = {
    width: "100%",
    height: "100%",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundImage: `${imgStyle}`,
  };

  const handleDetailsClick = (e) => {
    dispatch(setProductID(e.product_id));
  };

  return (
    <div className="banner-container">
      <div className="banner-hover">
        <Link
          className="banner-link"
          onClick={() => handleDetailsClick({ product_id })}
          to={`/product_details/${product_id}`}
        >
          <h2 className="banner-hover-text">{t("SEE_THE_BIKE")}</h2>
        </Link>
      </div>
      <div style={backgroundImageStyle} className="banner-container">
        <h2 className="model-text">{model}</h2>
      </div>
    </div>
  );
};
