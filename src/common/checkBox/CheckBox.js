import React from 'react'
import './CheckBox.css'

export default function CheckBox({id,name,labelFor,label,num}) {
  return (
    <div className='checkbox'>
      <div className='checkboxInput'>
      <input type="checkbox" id={id} name={name} />
    <label htmlFor={labelFor}>{label}</label>
      </div>

    <p className='checkBoxNum'>{num}</p>
    </div>
  )
}
