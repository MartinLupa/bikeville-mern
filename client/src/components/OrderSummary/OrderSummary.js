import React, { useContext } from "react";
import { GlobalContext } from "../../App";
import { CartItem } from "../CartItem/CartItem";
import "./OrderSummary.css";

export const OrderSummary = () => {
  const { order, user } = useContext(GlobalContext);
  console.log(user);

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
      <h1>{user.userInfo.first_name} you are almost ready to hit the road!</h1>
      <h2>Order summary:</h2>
      {order?.products.map((product, index) => (
        <CartItem key={index} product={product} />
      ))}
      Courier company: {order.courier_company.company.toUpperCase()}
      <p>Expected delivery: {`${date} / ${month} / ${year}`}</p>
      <p>Delivery address: </p>
      <ul>
        <li>
          Street:{" "}
          {`${user.userInfo.address.street} ${user.userInfo.address.street_number}`}
        </li>
        <li>Postal code: {user.userInfo.address.postal_code}</li>
        <li>City: {user.userInfo.address.city}</li>
        <li>Country: {user.userInfo.address.country}</li>
      </ul>
      <h3>Total: € {order?.total}</h3>
    </div>
  );
};
