import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const Navlink = ({children}) => {
  return (
    <>
      <Link className='nav-link' to="history">{children}</Link>
    </>
  );
}

