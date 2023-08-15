import React from 'react'
import './WideCard.css';
export default function WideCard({header,price,link}) {
  return (
    <div className='wideCardWrapper'>

    <div className='leftSide'>

    <img className='heroImg' src={link} />

    </div>

    <div className='rightSide'>
    <h1>{header}</h1>
      <p>{price}</p>

      <img className='stars' src={require("../../../img/stars.png")} />
    </div>


    </div>
  )
}
