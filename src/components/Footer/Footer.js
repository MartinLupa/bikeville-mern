import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer-container">
      Martín Lupa {year}
      <div className="icons-container">
        <a
          className="icon linkedin-icon"
          href="https://www.linkedin.com/in/martin-lupa/"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a className="icon git-icon" href="https://www.github.com/MartinLupa">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </footer>
  );
}
