import React from 'react'
import prince from "../../../assets/brand.png";
import './style.css';


export const Logo = () => {
  return (
    <div>
      <img src={prince} alt="alt" className='logo-image' />
    </div>
  );
}
