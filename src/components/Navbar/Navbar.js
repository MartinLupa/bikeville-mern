import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import { NavLink } from "react-router-dom";
import "../../styles/Variables.scss";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <NavLink to="/">
        <div className="nav-left">
          <DirectionsBikeIcon className="nav-link" fontSize="large" />
          <h4 className="nav-link">BIKEVILLE</h4>
        </div>
      </NavLink>

      <div className="nav-center">
        <input
          className="input"
          type="text"
          placeholder="Search by product name"
        />
      </div>
      <div className="nav-right">
        <NavLink className="nav-link" to="/registration">
          <p>REGISTER</p>
        </NavLink>
        <NavLink className="nav-link" to="/login">
          <p>LOGIN</p>
        </NavLink>
        <NavLink to="/shopping_cart/martin">
          <Badge badgeContent={2} color="primary">
            <ShoppingCartOutlinedIcon
              fontSize="large"
              className="nav-link"
              color="action"
            />
          </Badge>
        </NavLink>
      </div>
    </div>
  );
}
