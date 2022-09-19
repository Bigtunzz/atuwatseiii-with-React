import React, { useState } from "react";
import {
  NavItem1,
  NavItem2,
  NavItem3,
  NavItem4,
  NavItem5,
  NavItem6,
} from "../../atoms";

import "./style.css";

export const FloatingNav = ({m}) => {
  const [floatingNav, setFloatingNav] = useState(false);
  const lowerNav = () => {
    setFloatingNav((floatingNav) => !floatingNav);
  };
  let checkFloatingNav = floatingNav ? "active" : "";
  return (
    <div
      className={`last-section ${checkFloatingNav} d-flex column ai-center ${m}`}
    >
      <span
        className={`v-upside ${checkFloatingNav} `}
        id="v-btn"
        onClick={lowerNav}
      >
        v
      </span>
      <div className="floating-nav d-flex ai-center">
        <NavItem1 />
        <NavItem2 />
        <NavItem3 />
        <NavItem4 />
        <NavItem5 />
        <NavItem6 />
      </div>
    </div>
  );
};
