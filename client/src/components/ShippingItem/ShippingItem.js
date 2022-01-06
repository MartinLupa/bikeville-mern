import "./ShippingItem.css";

export default function ShippingItem({ logo, price, courier_company }) {
  return (
    <div className="shipping-courier">
      <input name="shipping_company" value={courier_company} type="radio" />
      <img className="shipping-img" src={logo} alt="" />
      <p>Shipping to nearest picking spot</p>
      <div className="shipping-price">
        <p>€ {price}</p>
      </div>
    </div>
  );
}
