import { useCounter } from "../../hooks/useCounter";
import CartItemButton from "../CartItemButton/CartItemButton";
import "./CartItem.css";

export default function CartItem({ product, id }) {
  const { state, increment, decrement } = useCounter();

  return (
    <div className="cart-item">
      <div className="cart-left">
        <div className="qty-container">
          <div className="qty">{state}</div>
        </div>

        <img className="cart-img" src={product[0].image} alt="" />

        <div>
          <h5>{product[0].model}</h5>
          <p>{product[0].product_id}</p>
        </div>
      </div>

      <div className="cart-right">
        <div className="cart-price">€ {product[0].full_price}</div>
        <div>
          <CartItemButton onClick={increment} text={"+"} />
          <CartItemButton onClick={decrement} text={"-"} />
          <CartItemButton text={"x"} />
        </div>
      </div>
    </div>
  );
}
