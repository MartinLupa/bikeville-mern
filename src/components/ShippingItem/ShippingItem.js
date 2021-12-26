import "./ShippingItem.css";

export default function ShippingItem({ logo, price }) {
  return (
    <div className="shipping-courier">
      <input type="radio" />
      <img className="shipping-img" src={logo} alt="" />
      <p>Shipping to nearest picking spot</p>
      <div className="shipping-price">
        <p>€ {price}</p>
      </div>
    </div>
  );
}
