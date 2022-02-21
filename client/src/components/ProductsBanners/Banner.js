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
    <div style={backgroundImageStyle} className="banner-container">
      <h2 className="model-text">{model}</h2>
      <Link
        onClick={() => handleDetailsClick({ product_id })}
        to={`/product_details/${product_id}`}
      >
        <button className="banner-btn">CHECK THE BIKE!</button>
      </Link>
    </div>
  );
};
