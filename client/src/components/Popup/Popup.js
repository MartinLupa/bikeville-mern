import React from "react";
import { CartItemButton } from "../CartItemButton/CartItemButton";
import "./Popup.css";

export const Popup = ({ content, trigger }) => {
  return trigger ? (
    <div className="popup-wrapper">
      <div className="popup-container animate__animated animate__bounceIn">
        <div>
          <h2>OOPSS!</h2>
          <h4>{content}</h4>
        </div>
        <div className="popup-btn">
          <CartItemButton text={"X"} />
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};
