import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import { GlobalContext } from "../../App";
import GeneralButton from "../../components/GeneralButton/GeneralButton";
import "./Pay.css";

export default function Pay() {
  const [stripeToken, setStripeToken] = useState(null);
  const { cartTotal } = useContext(GlobalContext);
  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/checkout/payment",
          { tokenId: stripeToken.id, amount: 2000 }
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
        <span>Processing. Please wait...</span>
      ) : (
        <StripeCheckout
          name="Bike Ville"
          billingAddress
          shippingAddress
          description={`Your total is EUR ${cartTotal},00`}
          amount={cartTotal}
          token={onToken}
          stripeKey="pk_test_51KC2PyFVmRibgb7cIfnBbyEhMhTQDOus9i0naKot6ArtGLdNLbI4WuJqtzbF4o4z87PiMjRBzQ9QTOuhwXmMUvRE00ZihdQeV2"
        >
          <GeneralButton text={"PAY"} />
        </StripeCheckout>
      )}
    </div>
  );
}
