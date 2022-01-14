import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../App";
import { CartItem } from "../../components/CartItem/CartItem";
import { GeneralButton } from "../../components/GeneralButton/GeneralButton";
import { OtherServiceItem } from "../../components/OtherServiceItem/OtherServiceItem";
import { PaymentItem } from "../../components/PaymentItem/PaymentItem";
import { ShippingItem } from "../../components/ShippingItem/ShippingItem";
import dhl_logo from "../../images/dhl_logo.JPG";
import present_packaging from "../../images/present_packaging.JPG";
import ups_logo from "../../images/ups_logo.JPG";
import "./ShoppingCart.css";

export const ShoppingCart = () => {
  const { shoppingCart, cartTotal, setCartTotal, setOrder, user } =
    useContext(GlobalContext);
  const [courierCompany, setCourierCompany] = useState({
    company: "ups",
    cost: 14,
  });
  const navigate = useNavigate();

  const calculateCartTotal = () => {
    let total = 0;
    shoppingCart.map((item) => (total += item[0].full_price));
    setCartTotal(total);
  };

  const selectedCourier = (e) => {
    setCourierCompany({ company: e.target.value, cost: 14 });
  };

  const orderCheckout = () => {
    if (shoppingCart.length === 0) {
      alert("Your shopping cart is empty");
    } else if (!user) {
      alert("You need to be logged in to proceed. You will be redirected..");
      navigate("/login");
    } else {
      setOrder({
        products: shoppingCart,
        courier_company: courierCompany,
        total: cartTotal,
      });
      navigate("/pay");
    }
  };

  useEffect(() => {
    calculateCartTotal();
  }, [shoppingCart]);

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
        <Link to="/showroom">
          <GeneralButton text={"CONTINUE SHOPPING"} />
        </Link>

        <GeneralButton passedEvent={orderCheckout} text={"CHECKOUT"} />
      </div>
    </div>
  );
};
