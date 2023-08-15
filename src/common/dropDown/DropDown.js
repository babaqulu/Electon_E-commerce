import React from 'react'
import { useState } from 'react'
import './DropDown.css'
import DropdownItem from './dropdown-item/DropdownItem'

import {
  BrowserRouter as Router,
  useRoutes,
  Link,
  Outlet,
  useParams } from 'react-router-dom';
  import Routes from '../../router/Routes.js'

export default function DropDown() {

  const [open, setOpen] = useState(false)

  return (
    

<div className='menu-container'>

<div className='menu-trigger' onClick={()=>{setOpen(!open)}}>

<div className='browseCategories' >

<li className='browseCategoriesListHome' >
  <p>Browse categories</p>
</li>
<img src={require("../../img/arrow-down.png")} />

</div>

</div>

<div className={`dropdown-menu ${open? 'active': 'inactive'}`}>

<ul className='dropdown-menuList'>

  <Link to='/all-categories'>
  
  <DropdownItem menuItem='All categories'/>
  <DropdownItem menuItem='Smart watch'/>
  
  </Link>



</ul>

</div>

</div>

  )
}
