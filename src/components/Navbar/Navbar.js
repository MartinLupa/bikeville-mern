import './Navbar.css';
import '../../styles/Variables.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBiking } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  return (
    <div className="navbar-main">
      <FontAwesomeIcon className="logo" icon={faBiking}></FontAwesomeIcon>
    </div>
  );
}
