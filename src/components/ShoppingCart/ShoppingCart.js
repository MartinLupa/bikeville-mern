import { useContext } from "react";
import { GlobalContext } from "../../App";
import dhl_logo from "../../images/dhl_logo.JPG";
import present_packaging from "../../images/present_packaging.JPG";
import ups_logo from "../../images/ups_logo.JPG";
import CartItem from "../CartItem/CartItem";
import GeneralButton from "../GeneralButton/GeneralButton";
import OtherServiceItem from "../OtherServiceItem/OtherServiceItem";
import PaymentItem from "../PaymentItem/PaymentItem";
import ShippingItem from "../ShippingItem/ShippingItem";
import "./ShoppingCart.css";

export default function ShoppingCart() {
  const { shoppingCart } = useContext(GlobalContext);
  return (
    <div className="cart-container">
      <div className="cart items-container">
        <h6>Cart Items</h6>
        {shoppingCart?.map((item) => (
          <CartItem />
        ))}
      </div>
      <div className="cart payment-container">
        <h6>Payment</h6>
        {shoppingCart?.map((item) => (
          <PaymentItem />
        ))}

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
        <OtherServiceItem text={"Present packaging"} img={present_packaging} />
      </div>
      <div className="cart-btn">
        <GeneralButton text={"SEND ORDER"} />
      </div>
    </div>
  );
}
