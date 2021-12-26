import { useState } from "react";
import AddCartButton from "../AddCartButton/AddCartButton";
import "./ProductCard.css";

export default function ProductCard({ img, model, type, full_price, id }) {
  const [productID, setProductID] = useState();

  const handleDetailsClick = (e) => {
    console.log(e.id);
    setProductID(e.id);
  };

  return (
    <div className="card-container">
      <img className="card-img" src={img} alt={model} />
      <div className="card-info">
        <h4>{model}</h4>
        <p>{type}</p>

        <a
          onClick={() => handleDetailsClick({ id })}
          href={`product_details/${productID}`}
        >
          More info..
        </a>
      </div>

      <div className="card-price">
        <p>€{full_price}</p>
      </div>
      <AddCartButton className="card-btn" />
    </div>
  );
}
