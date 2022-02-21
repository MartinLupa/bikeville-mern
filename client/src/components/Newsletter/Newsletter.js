import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import "./Newsletter.css";

export const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <h1 className="background-text">bikeville</h1>
      <h2>NEWSLETTER</h2>
      <p>Get timely updates from your favourite products</p>
      <div className="newsletter-input">
        <input type="email" placeholder="Your email" />
        <button>
          <SendOutlinedIcon />
        </button>
      </div>
    </div>
  );
};
