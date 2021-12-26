import "./CartItem.css";

export default function CartItem() {
  return (
    <div className="cart-item">
      <div className="qty-container">
        <div className="qty">1</div>
      </div>
      <img
        className="cart-img"
        src="https://www.cervelo.com/media/catalog/product/m/y/my22-dura-ace-di2-five-black.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=800&width=1200&canvas=1200:800"
        alt=""
      />
      <h6>Cervelo R5</h6>
    </div>
  );
}
