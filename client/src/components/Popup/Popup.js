import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hidden } from "../../redux/actions/popup";
import { CartItemButton } from "../CartItemButton/CartItemButton";
import "./Popup.css";

export const Popup = ({ content }) => {
  const dispatch = useDispatch();
  const popup = useSelector((state) => state.popup);

  console.log(popup);
  const handleTrigger = () => {
    dispatch(hidden());
  };
  return popup.trigger ? (
    <div className="popup-wrapper">
      <div className="popup-container animate__animated animate__bounceIn">
        <div>
          <h2>OOPSS!</h2>
          <h4>{popup.message}</h4>
        </div>
        <div className="popup-btn">
          <CartItemButton passedEvent={handleTrigger} text={"X"} />
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};
