import React from "react";
import {useState} from "react";
import { Largetext, Overlay} from "../../atoms";
import { FloatingNav, HambugerMenu, Nav } from "../../molecules";
import "./style.css";

export const Home = () => {
    const [floatingNav, setFloatingNav] = useState(false);
    const lowerNav = () => {
      setFloatingNav((floatingNav) => !floatingNav);
    };
    let checkFloatingNav = floatingNav ? "active" : "";
  return (
    <div className="home d-flex column ai-center">
      <Overlay activate={checkFloatingNav} />
      <Nav hamburgerFunc={lowerNav} />
      <Largetext />
      <HambugerMenu activate={checkFloatingNav} func={lowerNav} />
      <FloatingNav />
    </div>
  );
};
