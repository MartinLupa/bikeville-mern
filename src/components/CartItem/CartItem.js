import CartItemButton from "../CartItemButton/CartItemButton";
import "./CartItem.css";

export default function CartItem() {
  return (
    <div className="cart-item">
      <div className="cart-left">
        <div className="qty-container">
          <div className="qty">1</div>
        </div>
        <img
          className="cart-img"
          src="https://www.cervelo.com/media/catalog/product/m/y/my22-dura-ace-di2-five-black.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=800&width=1200&canvas=1200:800"
          alt=""
        />
        <div>
          <h5>Cervelo R5</h5>
          <p>ID: RB_R501</p>
        </div>
      </div>

      <div className="cart-right">
        <div className="cart-price">€2450</div>
        <div>
          <CartItemButton text={"+"} />
          <CartItemButton text={"-"} />
          <CartItemButton text={"x"} />
        </div>
      </div>
    </div>
  );
}
