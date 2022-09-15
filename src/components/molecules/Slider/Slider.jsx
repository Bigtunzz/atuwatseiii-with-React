import React from 'react'
import { Square } from '../../atoms'
import './style.css'

export const Slider = () => {
  return (
    <div className='slider d-flex ai-center col-12'>
        <Square/>
        <div className='fake-img col-8'></div>
        <Square/>
    </div>
  )
}
