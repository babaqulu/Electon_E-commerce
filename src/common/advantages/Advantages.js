import React from 'react'
import './advantages.css';
export default function advantages({link,advantagesHeader,paragraph}) {
  return (
    <div className='advantages'>
      <img className='advantagesIcon' src={link} />

      <div>
        <h1 className='advantagesHeader'>{advantagesHeader}</h1>
        <p className='paragraph'>{paragraph}</p>
      </div>
    </div>
  )
}
