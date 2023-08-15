import React from 'react'
import './Navbar.css'
import DropDown from '../../common/dropDown/DropDown';

import {
  BrowserRouter as Router,
  useRoutes,
  Link,
  Outlet,
  useParams } from 'react-router-dom';
  import Routes from '../../router/Routes.js'

export default function Navbar() {
  return (
<div className='navbarWrapper'>

<DropDown />
      
  <ul className='navList' >

<Link to='/'>
<li className='listHome' >
  <p>Home</p>
  <img src={require("../../img/arrow-down-black.png")} />
</li>
</Link>


<li className='listCatalog'>
  <p>Catalog</p>
  <img src={require("../../img/arrow-down-black.png")} />
</li>

<li>
  <p>Blog</p>
</li>

<li className='listPages'>
  <p>Pages</p>
  <img src={require("../../img/arrow-down-black.png")} />
</li>

<li>
  <p>About us</p>
</li>

</ul>

<h1 className='freeReturn'>30 Days Free Return</h1>

</div>
  )
}
