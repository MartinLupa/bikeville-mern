import './ProductCard.css';

export default function ProductCard({ img, model, type, full_price }) {
  return (
    <div className="card-container">
      <img
        className="card-img"
        src="https://www.cervelo.com/media/catalog/product/m/y/my22-dura-ace-di2-five-black.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=800&width=1200&canvas=1200:800"
        alt=""
      />
      <h2>Cervélo S5</h2>
      <p>Road bike - Full carbon</p>
      <div className="card-price">
        <p>€2350</p>
      </div>
      <button className="btn card-btn">ADD TO CART</button>
    </div>
  );
}
