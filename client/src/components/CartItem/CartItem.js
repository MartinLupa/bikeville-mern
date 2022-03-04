import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { setQtyCounter } from "../../redux/actions/qtyCounter";
import {
  increaseQuantity,
  removeProduct,
} from "../../redux/reducers/shoppingCartReducer";
import { CartItemButton } from "../CartItemButton/CartItemButton";
import "./CartItem.css";

export const CartItem = ({ product }) => {
  const qtyCounter = useSelector((state) => state.qtyCounter);
  const dispatch = useDispatch();
  const shoppingCart = useSelector((state) => state.shoppingCart);
  const location = useLocation();

  //Lacks lower limit to 1.
  const counterIncrement = () => {
    dispatch(setQtyCounter(qtyCounter + 1));
    dispatch(increaseQuantity(qtyCounter));
    console.log(shoppingCart);
  };
  const counterDecrement = () => {
    dispatch(setQtyCounter(qtyCounter - 1));
  };

  const deleteItem = (product) => {
    dispatch(removeProduct(product));
  };

  return (
    <div className="cart-item animate__animated animate__fadeIn">
      <div className="cart-left">
        <div className="qty-container">
          <div className="qty">{qtyCounter}</div>
        </div>

        <img className="cart-img" src={product.image} alt="" />

        <div>
          <h5>{product.model}</h5>
          <p>{product.product_id}</p>
        </div>
      </div>

      <div className="cart-right">
        <div className="cart-price">€ {product.full_price}</div>
        {location.pathname !== "/pay" ? (
          <div>
            <CartItemButton
              passedEvent={() => counterIncrement(product.product_id)}
              text={"+"}
            />
            <CartItemButton
              passedEvent={() => counterDecrement(product.product_id)}
              text={"-"}
            />
            <CartItemButton
              passedEvent={() => deleteItem(product)}
              text={"x"}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};
