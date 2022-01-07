import React, { useContext } from "react";
import { GlobalContext } from "../../App";
import CartItem from "../CartItem/CartItem";
import "./OrderSummary.css";

export const OrderSummary = () => {
  const { order } = useContext(GlobalContext);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date().getDate() + 2;
  const month = monthNames[new Date().getMonth()];
  const year = new Date().getFullYear();

  return (
    <div className="summary-container">
      <h1>Your are almost ready to hit the road!</h1>
      <h2>Order summary:</h2>
      {order?.products.map((product, index) => (
        <CartItem key={index} product={product} />
      ))}
      Courier company: {order.courier_company.company.toUpperCase()}
      <p>Expected delivery: {`${date} / ${month} / ${year}`}</p>
      <h3>Total: € {order?.total}</h3>
    </div>
  );
};
