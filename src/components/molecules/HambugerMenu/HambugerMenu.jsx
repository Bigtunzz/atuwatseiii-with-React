import React from "react";
import { Link } from "react-router-dom";
import {
  HamburgerLink,
  HamburgerLink2,
  HamburgerLink3,
  Hamburgerlink5,
  HamburgerlinkFirst,
} from "../../atoms";
import "./style.css";
//  export  const showNav = () => {
//      navRef.current.classList.toggle("active");
//    };

export const HambugerMenu = ({activate,func}) => {

  return (
    <div className={`hambuger-menu ${activate} d-flex`}>
      <div className="line col-3" onClick={func}></div>
      <Link className="d-none" to="/">
        <HamburgerlinkFirst />
      </Link>
      <Link className="d-none" to="history">
        <HamburgerLink />
      </Link>
      <Link className="d-none" to="history">
        <HamburgerLink2 />
      </Link>
      <Link className="d-none" to="history">
        <HamburgerLink3 />
      </Link>
      <Link className="d-none" to="history">
        <Hamburgerlink5 />
      </Link>
    </div>
  );
};
