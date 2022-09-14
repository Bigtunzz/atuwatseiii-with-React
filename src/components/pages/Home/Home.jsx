import React from "react";
import { Largetext} from "../../atoms";
import { FloatingNav, Nav } from "../../molecules";
import "./style.css";

export const Home = () => {
  return (
    <div className="home d-flex column ai-center">
      <Nav />
      <Largetext />
      <FloatingNav/>
    </div>
  );
};
