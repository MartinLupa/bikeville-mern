import { faBiking } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import "../../styles/Variables.scss";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="logo">
        <FontAwesomeIcon size="2x" icon={faBiking}></FontAwesomeIcon>
        <h4>BIKEVILLE</h4>
        <NavLink to="/shopping_cart/martin">Shopping Cart</NavLink>
      </div>
    </div>
  );
}
