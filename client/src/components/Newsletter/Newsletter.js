import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import "./Newsletter.css";

export const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <h1 className="background-text">bikeville</h1>
      <h2>NEWSLETTER</h2>
      <p>Get timely updates from your favourite products</p>

      <form
        className="newsletter-form"
        action="https://formsubmit.co/lupa_martin@hotmail.com"
        method="POST"
      >
        <input type="email" placeholder="Your email" name="email" required />
        <button className="newsletter-button" type="submit">
          <SendOutlinedIcon />
        </button>
      </form>
    </div>
  );
};
