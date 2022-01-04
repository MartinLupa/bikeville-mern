import "./GeneralButton.css";

export default function GeneralButton({ type, text }) {
  return (
    <button type={type} className="general-btn">
      {text}
    </button>
  );
}
