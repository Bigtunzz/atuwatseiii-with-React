import React from 'react'
import './style.css'

export const Overlay = ({activate}) => {
  return <div className={`overlay ${activate}`}></div>;
}