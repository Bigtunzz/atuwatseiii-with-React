import React from 'react'
import "./style.css"
import prince from '../../../assets/brand.png';
import {Link} from 'react-router-dom';

export const Navbar = () => {
  return (

    <div className='flex'>
      <img src={prince} alt='alt' />
      <div>Navbar</div>
      <Link to='history' >click here abeg</Link>
      </div>
  )
}
