import "./PaymentItem.css";

export default function PaymentItem() {
  return (
    <div className="payment-item">
      <div>
        <h5>Cervelo R5</h5>
        <p>ID: RB_R501</p>
      </div>
      <div className="payment-amounts">
        <div>
          <p>Net price: </p>
          <p>VAT: </p>
          <p>Total:</p>
        </div>
        <div className="amounts">
          <p>€2350</p>
          <p>€640</p>
          <p> €3120</p>
        </div>
      </div>
    </div>
  );
}
