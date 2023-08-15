import React from 'react'
import './addCart.css';
export default function addCart() {
  return (
    <div className='addCartWrapper'>
          <button className='addCart' >

Add to cart
<div className='cartCircle' >
<img src={require("../../../img/cart.png")} />
</div>

</button>

<button className='eyeButton' >

<img src={require("../../../img/eye.png")} />

</button>
    </div>
  )
}
