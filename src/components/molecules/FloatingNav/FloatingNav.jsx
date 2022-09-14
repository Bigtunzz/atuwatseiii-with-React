import React from 'react'
import {
  NavItem1,
  NavItem2,
  NavItem3,
  NavItem4,
  NavItem5,
  NavItem6,
} from "../../atoms";

import './style.css';

export const FloatingNav = () => {
  return (
    <div className="last-section d-flex column ai-center">
      <span className="v-upside" id="v-btn">
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
}
