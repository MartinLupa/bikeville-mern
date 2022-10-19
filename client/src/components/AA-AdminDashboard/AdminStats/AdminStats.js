import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PaidIcon from "@mui/icons-material/Paid";
import { useEffect } from "react";
import "./AdminStats.css";
const {
  REACT_APP_TOKEN: token,
  REACT_APP_API_SALES_STATS: SALES_STATS_URL,
  REACT_APP_API_USERS_STATS: USER_STATS_URL,
} = process.env;

export const AdminStats = () => {
  useEffect(() => {
    fetch(SALES_STATS_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        token: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => console.log("SALESSTATS", data));

    fetch(USER_STATS_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        token: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => console.log("USERSTATS", data[0].total));
  }, []);

  return (
    <div className="stats-container">
      <div className="stats stats-sales">
        <PaidIcon className="stats-icon" />
        <div className="stats-info">
          Last month sales
          <h2>€ 43.854</h2>
        </div>
      </div>
      <div className="stats stats-users">
        <AccountCircleIcon className="stats-icon" />
        <div className="stats-info">
          Last month registered users
          <h2>322</h2>
        </div>
      </div>
    </div>
  );
};
