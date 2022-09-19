import React from "react";
import "./style.css";

export const BtnSliderPrev = ({ moveSlide }) => {
  return (
    <button onClick={moveSlide} className="prev">
      🢐
    </button>
  );
};
export const BtnSliderNext = ({ moveSlide }) => {
  return (
    <button className="next" onClick={moveSlide}>
      🢐
    </button>
  );
};
