import dhl_logo from "../../images/dhl_logo.JPG";
import ups_logo from "../../images/ups_logo.JPG";
import CartItem from "../CartItem/CartItem";
import GeneralButton from "../GeneralButton/GeneralButton";
import PaymentItem from "../PaymentItem/PaymentItem";
import ShippingItem from "../ShippingItem/ShippingItem";
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
        <PaymentItem />
        <PaymentItem />
        <PaymentItem />
        <div className="cart-total">
          <p>
            <strong>TOTAL:</strong>
          </p>
          <p>
            <strong>€ 4650</strong>
          </p>
        </div>
      </div>
      <div className="cart shipping-container">
        <h6>Shipping</h6>
        <ShippingItem logo={ups_logo} price={14} />
        <ShippingItem logo={dhl_logo} price={14} />
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
