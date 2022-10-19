import React from "react";
import { useSelector } from "react-redux";
import { CartItem } from "../CartItem/CartItem";
import "./OrderSummary.css";

export const OrderSummary = () => {
  const user = useSelector((state) => state.auth);
  const order = useSelector((state) => state.orderSummary);

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

  console.log(order.products);

  return (
    <div className="summary-container">
      <h1>{user.userInfo.first_name} you are almost ready to hit the road!</h1>
      <h2>Order summary:</h2>
      {order?.products.map((product, index) => (
        <CartItem key={index} product={product} />
      ))}
      <div className="order-info">
        <b> Courier company:</b> {order.courier_company.company.toUpperCase()}
        <p>
          <b>Expected delivery:</b> {`${date} / ${month} / ${year}`}
        </p>
        <p>
          <b>Delivery address:</b>{" "}
        </p>
        <ul>
          <li>
            <b>Street:</b>
            {`${user.userInfo.address.street} ${user.userInfo.address.street_number}`}
          </li>
          <li>
            <b>Postal code</b>: {user.userInfo.address.postal_code}
          </li>
          <li>
            <b>City:</b> {user.userInfo.address.city}
          </li>
          <li>
            <b>Country:</b> {user.userInfo.address.country}
          </li>
        </ul>
        <h3>Total: € {order?.total}</h3>
      </div>
    </div>
  );
};
