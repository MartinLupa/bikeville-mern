import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import { GlobalContext } from "../../App";
import CircularIndeterminate from "../../components/CircularProgress/CircularProgress";
import GeneralButton from "../../components/GeneralButton/GeneralButton";
import { OrderSummary } from "../../components/OrderSummary/OrderSummary";
import "./Pay.css";

export default function Pay() {
  const [stripeToken, setStripeToken] = useState(null);
  const { cartTotal, order } = useContext(GlobalContext);
  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/checkout/payment",
          { tokenId: stripeToken.id, amount: order.total }
        );
        console.log(res.data);
        navigate("/success");
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken]);

  return (
    <div className="pay-container">
      {stripeToken ? (
        <div className="processing-info">
          <CircularIndeterminate />
          <h2>
            <span>Processing. Please wait...</span>
          </h2>
        </div>
      ) : (
        <div className="summary-info">
          <OrderSummary />
          <StripeCheckout
            name="Bike Ville"
            billingAddress
            shippingAddress
            description={`Your total is EUR ${order.total},00`}
            amount={order.total}
            token={onToken}
            stripeKey="pk_test_51KC2PyFVmRibgb7cIfnBbyEhMhTQDOus9i0naKot6ArtGLdNLbI4WuJqtzbF4o4z87PiMjRBzQ9QTOuhwXmMUvRE00ZihdQeV2"
          >
            <GeneralButton text={"PAY"} />
          </StripeCheckout>
        </div>
      )}
    </div>
  );
}
