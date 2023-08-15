import React from 'react'
import './DropdownItem.css'

export default function DropdownItem({menuItem}) {
  return (
    <div className='dropDownItemWrapper'>
        <li><a>{menuItem}</a></li>
    </div>
  )
}
