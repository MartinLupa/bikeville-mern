import "./GeneralButton.css";

export default function GeneralButton({ type, text, passedEvent }) {
  return (
    <button onClick={passedEvent} type={type} className="general-btn">
      {text}
    </button>
  );
}
