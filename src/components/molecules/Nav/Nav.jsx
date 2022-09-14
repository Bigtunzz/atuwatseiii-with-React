import React from 'react';
import { Logo, Navlink } from '../../atoms';
import './style.css';

export const Nav = () => {
  return (
    <div className='nav'>
        <Logo/>
        <div className='nav-links'>
            <Navlink> Histoty</Navlink>
            <Navlink> Histosy</Navlink>
            <Navlink> Histofy</Navlink>
            <Navlink> Histoiy</Navlink>
        </div>
    </div>
  )
}
