import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../App";
import AddCartButton from "../AddCartButton/AddCartButton";
import "./ProductCard.css";

export default function ProductCard({ img, model, type, full_price, id }) {
  const { productID, setProductID } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleDetailsClick = (e) => {
    setProductID(e.id);
  };

  const handleDetailsSubmit = (e) => {
    e.preventDefault();
    navigate(`product_details/${productID}`);
  };

  return (
    <div className="card-container">
      <img className="card-img" src={img} alt={model} />
      <div className="card-info">
        <h4>{model}</h4>
        <p>{type}</p>
        <form onSubmit={handleDetailsSubmit} action="">
          <button
            className="card-btn"
            onClick={() => handleDetailsClick({ id })}
          >
            More info...
          </button>
        </form>
      </div>

      <div className="card-price">
        <p>€{full_price}</p>
      </div>
      <AddCartButton id={id} className="card-btn" />
    </div>
  );
}
