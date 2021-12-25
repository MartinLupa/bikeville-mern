import AddCartButton from "../AddCartButton/AddCartButton";
import "./ProductCard.css";

export default function ProductCard({ img, model, type, full_price }) {
  const handleProductDetail = (e) => {};

  return (
    <div className="card-container">
      <img
        onClick={handleProductDetail}
        className="card-img"
        src={img}
        alt={model}
      />
      <div className="card-info">
        <h2>{model}</h2>
        <p>{type}</p>
        <a onClick={handleProductDetail} href="">
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
