import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export const Arrow = () => {
  return (
    <Link className='d-none arrow' to="/">
      <div
    //   style={
    //     {
            
    //     }
    //   }
    //     width="28px"
    //     height="28px"
    //     direction="row"
    //     wrap="no-wrap"
    //     order="0"
    //     className="sc-bdvvtL sc-bBHHxi gqOcBT hUXvSJ"
      >
        ⟵
      </div>
    </Link>
  );
}
