import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../redux/actions/auth";
import "../../styles/Variables.scss";
import "./Navbar.css";

export const Navbar = () => {
  const quantity = useSelector((state) => state.shoppingCart.quantity);
  const user = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation(["common"]);

  const handleLogout = () => {
    dispatch(logout());
    window.localStorage.setItem("user", JSON.stringify("{logged: false}"));
    navigate("/");
  };

  return (
    <nav className="navbar-container sticky">
      <NavLink
        className={(navData) => (navData.isActive ? "nav-link" : "nav-link")}
        to="/"
      >
        <div className="nav-left">
          <DirectionsBikeIcon className="" fontSize="large" />
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
            <p>{t("PRODUCTS")}</p>
          </div>
        </NavLink>
        <NavLink
          className={(navData) =>
            navData.isActive ? "nav-link active" : "nav-link"
          }
          to="/contact"
        >
          <div>
            <p>{t("CONTACT")}</p>
          </div>
        </NavLink>

        {/* REGISTER CONDITIONAL RENDERING */}
        {user?.logged === true && user.userInfo.isAdmin ? (
          <NavLink
            className={(navData) =>
              navData.isActive ? "nav-link active" : "nav-link"
            }
            to="/dashboard"
          >
            <div className="underline">
              <p>{t("DASHBOARD")}</p>
            </div>
          </NavLink>
        ) : null}

        {user?.logged === true ? null : (
          <NavLink
            className={(navData) =>
              navData.isActive ? "nav-link active" : "nav-link"
            }
            to="/registration"
          >
            <div className="underline">
              <p>{t("REGISTER")}</p>
            </div>
          </NavLink>
        )}

        {/* LOGIN / LOGOUT CONDITIONAL RENDERING */}
        {user?.logged === true ? (
          <NavLink
            onClick={handleLogout}
            className={(navData) =>
              navData.isActive ? "nav-link active" : "nav-link"
            }
            to="/"
          >
            <div className="underline">
              <p>{t("LOGOUT")}</p>
            </div>
          </NavLink>
        ) : (
          <NavLink
            className={(navData) =>
              navData.isActive ? "nav-link active" : "nav-link"
            }
            to="/login"
          >
            <div className="underline">
              <p>{t("LOGIN")}</p>
            </div>
          </NavLink>
        )}

        {user?.logged === true ? (
          <div className="logged">
            <p>{user.userInfo.first_name}</p>
            <Link to="/shopping_cart">
              <div className="cart-icon">
                <Badge badgeContent={quantity} color="primary">
                  <ShoppingCartOutlinedIcon
                    fontSize="large"
                    className="nav-link nav-icon"
                    color="action"
                  />
                </Badge>
              </div>
            </Link>
          </div>
        ) : (
          <Link to="/shopping_cart">
            <div className="cart-icon">
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlinedIcon
                  fontSize="large"
                  className="nav-link nav-icon"
                  color="action"
                />
              </Badge>
            </div>
          </Link>
        )}
      </div>
    </nav>
  );
};
