
import React from 'react'
import './Header.css';
import Navbar from '../navbar/Navbar'

export default function Header({handleChange,query,handleInputChange}) {
  return (
    <div>
      <header className="App-header">

        <div className='headerFirst header'>

<p className='helpCall'>Need help? Call us: (+98) 0234 456 789</p>

<div className='headerIconWrapper' >

<div className='headerLocationIcon'>

  <img src={require("../../img/location.png")}/>
  <p>Our store</p>

</div>

<div className='headerTruckIcon'>

  <img src={require("../../img/truck.png")} />
  <p>Track your order</p>

</div>

</div>

</div>

<div className='headerSecond header' >

<img src={require("../../img/logo.png")}/>

<div className='headerSearch' >

<input type="search" onChange={handleChange} name="search" placeholder="Serach any things" />
<button>Search</button>

</div>

<div className='iconContainer' >

<div className='user' >

<img src={require("../../img/user.png")}/>
<p className='iconName'>Sign in</p>

</div>

<div className='heart heartCart' >

<img src={require("../../img/heart.png")}/>
<span><p>0</p></span>
<p className='iconName'>Sign in</p>

</div>

<div className='cart heartCart' >

<img src={require("../../img/heart.png")}/>
<span><p>0</p></span>
<p className='iconName'>Cart</p>

</div>

</div>
</div>

<div className='headerThird header'>



    <Navbar />



</div>
</header>
    </div>
  )
}
