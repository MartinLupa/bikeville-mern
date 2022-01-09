import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../App";
import "../../styles/Variables.scss";
import "./Navbar.css";

export const Navbar = () => {
  const { shoppingCart, user, setUser } = useContext(GlobalContext);
  const handleLogout = () => {
    setUser({});
  };

  useEffect(() => {
    localStorage.setItem("loggedUser", JSON.stringify(user));
  }, [user]);

  return (
    <nav className="navbar-container sticky">
      <NavLink
        className={(navData) => (navData.isActive ? "nav-link" : "nav-link")}
        to="/"
      >
        <div className="nav-left">
          <DirectionsBikeIcon className="nav-link" fontSize="large" />
          <h4 className="nav-link">BIKEVILLE</h4>
        </div>
      </NavLink>

      <div className="nav-right">
        <NavLink
          className={(navData) =>
            navData.isActive ? "nav-link active" : "nav-link"
          }
          to="/showroom"
        >
          <div>
            <p>PRODUCTS</p>
          </div>
        </NavLink>
        <NavLink
          className={(navData) =>
            navData.isActive ? "nav-link active" : "nav-link"
          }
          to="/contact"
        >
          <div>
            <p>CONTACT</p>
          </div>
        </NavLink>

        <NavLink
          className={(navData) =>
            navData.isActive ? "nav-link active" : "nav-link"
          }
          to="/registration"
        >
          <div className="underline">
            <p>REGISTER</p>
          </div>
        </NavLink>

        <NavLink
          className={(navData) =>
            navData.isActive ? "nav-link active" : "nav-link"
          }
          to="/login"
        >
          <div className="underline">
            <p>LOGIN</p>
          </div>
        </NavLink>

        <NavLink
          className={(navData) => (navData.isActive ? "nav-link" : "nav-link")}
          to="/shopping_cart/:userId"
        >
          <Badge badgeContent={shoppingCart?.length} color="primary">
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
};
