import { useContext, useState } from "react";
import { GlobalContext } from "../../App";
import CartItemButton from "../CartItemButton/CartItemButton";
import "./CartItem.css";

export default function CartItem({ product }) {
  const { setShoppingCart } = useContext(GlobalContext);
  const [qtyCounter, setQtyCounter] = useState(1);

  //Lacks lower limit to 1.
  const counterIncrement = () => {
    setQtyCounter(qtyCounter + 1);
  };
  const counterDecrement = () => {
    setQtyCounter(qtyCounter - 1);
  };

  return (
    <div className="cart-item">
      <div className="cart-left">
        <div className="qty-container">
          <div className="qty">{qtyCounter}</div>
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
          <CartItemButton passedEvent={counterIncrement} text={"+"} />
          <CartItemButton passedEvent={counterDecrement} text={"-"} />
          <CartItemButton text={"x"} />
        </div>
      </div>
    </div>
  );
}
