import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import { NavLink } from "react-router-dom";
import "../../styles/Variables.scss";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar-container">
      <NavLink activeclassname="underline" to="/">
        <div className="nav-left">
          <DirectionsBikeIcon className="nav-link" fontSize="large" />
          <h4 className="nav-link">BIKEVILLE</h4>
        </div>
      </NavLink>

      <div className="nav-right">
        <NavLink className="nav-link" to="/contact">
          <div className="underline">
            <p>CONTACT</p>
          </div>
        </NavLink>
        <NavLink className="nav-link" to="/registration">
          <div className="underline">
            <p>REGISTER</p>
          </div>
        </NavLink>
        <NavLink className="nav-link" to="/login">
          <div className="underline">
            <p>LOGIN</p>
          </div>
        </NavLink>
        <NavLink to="/shopping_cart/:userId">
          <Badge badgeContent={2} color="primary">
            <ShoppingCartOutlinedIcon
              fontSize="large"
              className="nav-link"
              color="action"
            />
          </Badge>
        </NavLink>
      </div>
    </nav>
  );
}
