import "./OtherServiceItem.css";

export default function OtherServiceItem({ img, text }) {
  return (
    <div className="other-service-container">
      <input type="radio" />
      <img className="other-img" src={img} alt="" />
      <p>{text}</p>
    </div>
  );
}
