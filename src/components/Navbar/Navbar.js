import { faBiking } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../styles/Variables.scss';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="logo">
        <FontAwesomeIcon size="2x" icon={faBiking}></FontAwesomeIcon>
        <h4>BIKEVILLE</h4>
      </div>
    </div>
  );
}
