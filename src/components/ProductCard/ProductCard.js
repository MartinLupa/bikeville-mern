import "./ProductCard.css";

export default function ProductCard({ img, model, type, full_price }) {
  return (
    <div className="card-container">
      <img className="card-img" src={img} alt={model} />
      <h2>{model}</h2>
      <p>{type}</p>
      <div className="card-price">
        <p>€{full_price}</p>
      </div>
      <button className="btn card-btn">ADD TO CART</button>
    </div>
  );
}
