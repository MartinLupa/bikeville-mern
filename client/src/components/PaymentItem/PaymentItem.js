import "./PaymentItem.css";

export const PaymentItem = ({ product }) => {
  return (
    <div className="payment-item">
      <div>
        <h5>{product.model}</h5>
        <h6>{product.product_id}</h6>
      </div>
      <div className="payment-amounts">
        <div>
          <h5>Net price: </h5>
          <h5>VAT: </h5>
          <h5>
            <strong>Total:</strong>
          </h5>
        </div>
        <div className="amounts">
          <h5>€ {product.net_price}</h5>
          <h5>€ {product.vat}</h5>
          <h5>
            <strong>€ {product.full_price}</strong>
          </h5>
        </div>
      </div>
    </div>
  );
};
