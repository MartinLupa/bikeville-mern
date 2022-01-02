import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import React from "react";
import "./TopScroll.css";

export const TopScroll = () => {
  return (
    <button className="top-scroll">
      <ArrowCircleUpOutlinedIcon
        className="scroll-icon"
        sx={{ fontSize: 80 }}
      />
    </button>
  );
};
