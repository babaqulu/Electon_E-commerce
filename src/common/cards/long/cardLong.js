import React from 'react'
import './cardLong.css';
export default function cardLong({link,header,num}) {
  return (
    <div className='cardLongWrapper'>


      <img src={link} />

      <div className='text'>

      <h1>{header}</h1>
      <p>{num}</p>

      </div>
      

    </div>
  )
}
