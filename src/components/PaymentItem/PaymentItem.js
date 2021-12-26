import "./PaymentItem.css";

export default function PaymentItem() {
  return (
    <div className="payment-item">
      <div>
        <h6>Cervelo R5</h6>
        <h6>ID: RB_R501</h6>
      </div>
      <div className="payment-amounts">
        <div>
          <p>Net price: </p>
          <p>VAT: </p>
          <p>
            <strong>Total:</strong>
          </p>
        </div>
        <div className="amounts">
          <p>€ 2350</p>
          <p>€ 640</p>
          <p>
            <strong>€ 3120</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
