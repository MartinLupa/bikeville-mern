import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../App";
import "./ProductsBanners.css";

export const Banner = ({ imgStyle, model, product_id }) => {
  const { setProductID } = useContext(GlobalContext);

  let backgroundImageStyle = {
    width: "100%",
    height: "100vh",
    backgroundSize: "cover",
    backgroundColor: "red",
    backgroundImage: `${imgStyle}`,
  };

  const handleDetailsClick = (e) => {
    setProductID(e.product_id);
  };

  return (
    <div className="banner-container">
      <div className="banner-hover">
        <Link
          className="banner-link"
          onClick={() => handleDetailsClick({ product_id })}
          to={`/product_details/${product_id}`}
        >
          <h2 className="banner-hover-text">SEE THE BIKE!</h2>
        </Link>
      </div>
      <div style={backgroundImageStyle} className="banner-container">
        <h2 className="model-text">{model}</h2>
      </div>
    </div>
  );
};
