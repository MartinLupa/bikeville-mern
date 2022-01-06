import { useContext, useEffect, useState } from "react";
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
  const [order, setOrder] = useState({
    products: [],
    courier_company: {},
    total: 0,
  });
  const { shoppingCart, cartTotal, setCartTotal } = useContext(GlobalContext);
  const [courierCompany, setCourierCompany] = useState({
    company: "ups",
    cost: 14,
  });

  const calculateCartTotal = () => {
    let total = 0;
    shoppingCart.map((item) => (total += item[0].full_price));
    setCartTotal(total);
  };

  const selectedCourier = (e) => {
    setCourierCompany({ company: e.target.value, cost: 14 });
  };

  const orderCheckout = () => {
    setOrder({
      products: shoppingCart,
      courier_company: courierCompany,
      total: cartTotal,
    });
  };

  useEffect(() => {
    calculateCartTotal();
  }, [shoppingCart]);
  console.log("order", order);

  return (
    <div className="cart-container">
      <div className="cart items-container">
        <h4>Cart Items</h4>
        {shoppingCart.length > 0 ? (
          shoppingCart.map((product, id) => (
            <CartItem key={id} product={product} />
          ))
        ) : (
          <p className="alert">ShoppingCart is empty</p>
        )}
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
            <strong>€ {cartTotal}</strong>
          </p>
        </div>
      </div>
      <div className="cart shipping-container">
        <h4>Shipping</h4>
        <ShippingItem
          passedEvent={selectedCourier}
          logo={ups_logo}
          price={14}
          courier_company={"ups"}
        />
        <ShippingItem
          passedEvent={selectedCourier}
          logo={dhl_logo}
          price={14}
          courier_company={"dhl"}
        />
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
          <GeneralButton passedEvent={orderCheckout} text={"CHECKOUT"} />
        </Link>
      </div>
    </div>
  );
}
