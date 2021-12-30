import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../App";
import AddCartIcon from "../AddCartIcon/AddCartIcon";
import "./ProductCard.css";

export default function ProductCard({ img, model, type, full_price, id }) {
  const { productID, setProductID } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleDetailsClick = (e) => {
    setProductID(e.id);
  };

  return (
    <div className="card-container">
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
        <p>{type}</p>
      </div>

      <div className="card-price">
        <p>€{full_price}</p>
      </div>
    </div>
  );
}
