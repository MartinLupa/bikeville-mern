import { useContext } from "react";
import { Link } from "react-router-dom";
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
        <h4>Cart Items</h4>
        {shoppingCart?.map((product, id) => (
          <CartItem key={id} product={product} />
        ))}
      </div>
      <div className="cart payment-container">
        <h4>Payment</h4>
        {shoppingCart?.map((product, id) => (
          <PaymentItem key={id} product={product} />
        ))}

        <div className="cart-total">
          <p>
            <strong>TOTAL:</strong>
          </p>
          <p>
            <strong>€ 4350</strong>
          </p>
        </div>
      </div>
      <div className="cart shipping-container">
        <h4>Shipping</h4>
        <ShippingItem logo={ups_logo} price={14} />
        <ShippingItem logo={dhl_logo} price={14} />
      </div>
      <div className="cart other-container">
        <h4>Other services</h4>
        <OtherServiceItem text={"Present packaging"} img={present_packaging} />
      </div>
      <div className="cart-btn">
        <Link to="/">
          <GeneralButton text={"CONTINUE SHOPPING"} />
        </Link>
        <Link to="/pay">
          <GeneralButton text={"CHECKOUT"} />
        </Link>
      </div>
    </div>
  );
}
