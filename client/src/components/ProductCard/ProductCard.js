import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import "animate.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../App";
import AddCartIcon from "../AddCartIcon/AddCartIcon";
import "./ProductCard.css";

export default function ProductCard({
  img,
  model,
  short_description,
  type,
  full_price,
  id,
}) {
  const { setProductID } = useContext(GlobalContext);

  const handleDetailsClick = (e) => {
    setProductID(e.id);
  };

  return (
    <div className="card-container animate__animated animate__fadeIn">
      <div className="hover-effect">
        <Link
          className="more-info-icon"
          onClick={() => handleDetailsClick({ id })}
          to={`/product_details/${id}`}
        >
          <InfoOutlinedIcon fontSize="large" />
        </Link>
        <AddCartIcon id={id} />
      </div>
      <img className="card-img" src={img} alt={model} />
      <div className="card-info">
        <h4>{model}</h4>
        <p>{short_description}</p>
        <p>{type}</p>
      </div>

      <div className="card-price">
        <p>€{full_price}</p>
      </div>
    </div>
  );
}
