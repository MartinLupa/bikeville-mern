import MapContainer from "../../components/Map/MapContainer";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-container">
      <div style={{ width: 300, height: 300 }}>
        <MapContainer {...props} />
      </div>
    </div>
  );
}
