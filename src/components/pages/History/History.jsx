import React from 'react';
import {Link} from 'react-router-dom'
import './style.css';

export const History = () => {
  return (
    <>
      <div>History</div>
      <Link className='link-style' to="/">carry me go back</Link>
    </>
  );
}

