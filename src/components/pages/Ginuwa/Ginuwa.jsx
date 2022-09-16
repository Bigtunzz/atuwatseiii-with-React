import React from 'react'
import './style.css'
import ginuwaImg from "../../../assets/ginuwa.e4765c1eb1bbf7324286.png";

export const Ginuwa = () => {
  return (
    <div className="ginuwa">
      <section className="ginuwa-section1">
        <img src={ginuwaImg} alt="ginwa-img" className="ginwa-img" />
      </section>
      <section className="ginuwa-section2">
        <div className="backArrow">
          {/* <Link className="link-style" to="/">
            carry me go back
          </Link> */}
          <a href="../index.html">
            <div className="arrow">⟵</div>
          </a>
        </div>
      </section>
    </div>
  );
}
