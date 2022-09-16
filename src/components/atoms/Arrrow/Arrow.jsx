import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export const Arrow = () => {
  return (
    <>
      <div className="backArrow">
        <Link className="d-none" to="/">
          <div className="arrow">⟵</div>
        </Link>
        {/* <Link className="link-style" to="/">
            carry me go back
          </Link> */}
        {/* <a href="../index.html">
          <div className="arrow">⟵</div>
        </a> */}
      </div>

      {/* <Link className="d-none arrow" to="/"></Link> */}
    </>
  );
}
