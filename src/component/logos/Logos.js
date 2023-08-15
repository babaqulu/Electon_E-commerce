import React from 'react'
import './Logos.css';
export default function Logos() {
  return (
    <div className='logosWrapper'>
      <img src={require('../../img/spacinglogo1.png')}/>
      <img src={require('../../img/spacinglogo2.png')}/>
      <img src={require('../../img/spacinglogo3.png')}/>
      <img src={require('../../img/spacinglogo4.png')}/>
      <img src={require('../../img/spacinglogo5.png')}/>
    </div>
  )
}
