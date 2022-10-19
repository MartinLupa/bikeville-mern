import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { LanguageSelector } from "../LanguageSelector/LanguageSelector";
import "./Footer.css";

export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-left"></div>
      <div className="footer-center">
        Martín Lupa {year}
        <div className="icons-container">
          <a
            className="icon linkedin-icon"
            href="https://www.linkedin.com/in/martin-lupa/"
          >
            <LinkedInIcon fontSize="small" />
          </a>
          <a className="icon git-icon" href="https://www.github.com/MartinLupa">
            <GitHubIcon fontSize="small" />
          </a>
        </div>
      </div>
      <div className="footer-right">
        <LanguageSelector />
      </div>
    </footer>
  );
};
