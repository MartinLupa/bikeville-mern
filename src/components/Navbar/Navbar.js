import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { NavLink } from "react-router-dom";
import "../../styles/Variables.scss";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="nav-left">
        <DirectionsBikeIcon fontSize="large" />
        <h4>BIKEVILLE</h4>
      </div>
      <div className="nav-center">
        <input className="input" type="text" />
      </div>
      <div className="nav-right">
        <NavLink to="/shopping_cart/martin">
          <ShoppingCartOutlinedIcon fontSize="medium" className="cart-icon" />
        </NavLink>
      </div>
    </div>
  );
}
