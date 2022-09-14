import React from "react";
import { Largetext, NavItem1, NavItem2, NavItem3 } from "../../atoms";
import { Nav } from "../../molecules";
import "./style.css";

export const Home = () => {
  return (
    <div className="home">
      <Nav />
      <Largetext />

    <div>
      <NavItem1/>
      <NavItem2/>
      <NavItem3/>
    </div>
    </div>
  );
};
