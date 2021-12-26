import CartItem from "../CartItem/CartItem";
import GeneralButton from "../GeneralButton/GeneralButton";
import "./ShoppingCart.css";

export default function ShoppingCart() {
  return (
    <div className="cart-container">
      <div className="cart items-container">
        <h6>Cart Items</h6>
        <CartItem />
        <CartItem />
      </div>
      <div className="cart payment-container">
        <h6>Payment</h6>
      </div>
      <div className="cart shipping-container">
        <h6>Shipping</h6>
      </div>
      <div className="cart other-container">
        <h6>Other services</h6>
      </div>
      <div className="cart-btn">
        <GeneralButton text={"SEND ORDER"} />
      </div>
    </div>
  );
}
