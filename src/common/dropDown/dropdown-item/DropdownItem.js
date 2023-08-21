import React from 'react'
import './DropdownItem.css'

export default function DropdownItem({menuItem}) {
  return (
    <div className='dropDownItemWrapper'>
        <li><p>{menuItem}</p></li>
    </div>
  )
}
