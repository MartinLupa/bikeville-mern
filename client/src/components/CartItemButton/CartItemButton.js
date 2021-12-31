import "./CartItemButton.css";

export default function CartItemButton({ passedEvent, text }) {
  return (
    <button onClick={passedEvent} className="cart-item-btn">
      {text}
    </button>
  );
}
