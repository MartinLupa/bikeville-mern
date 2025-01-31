import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import "animate.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setProductID } from "../../redux/actions/productID";
import { AddCartIcon } from "../AddCartIcon/AddCartIcon";
import "./ProductCard.css";

export const ProductCard = ({
  image,
  model,
  short_description,
  type,
  groupset,
  full_price,
  id,
}) => {
  const dispatch = useDispatch();

  const handleDetailsClick = (e) => {
    dispatch(setProductID(e.id));
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

      <img className="card-img" src={image} alt={model} />
      <div className="card-info">
        <h4>{model}</h4>
        <p>{short_description}</p>
        <p>
          <b>Type:</b> {type}
        </p>
        <p>
          <b>Groupset:</b> {groupset}
        </p>
      </div>

      <div className="card-price">
        <p>€{full_price}</p>
      </div>
    </div>
  );
};
