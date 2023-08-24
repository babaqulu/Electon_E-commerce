import React from 'react'
import './CheckBox.css'

export default function CheckBox({name,labelFor,label,num,value,handleCheck}) {
  return (
    <div className='checkbox'>
      <div className='checkboxInput'>
      <input 
      type="checkbox" onClick={handleCheck} value={value} name={name} />
    <label htmlFor={labelFor}>{label}</label>
      </div>

    <p className='checkBoxNum'>{num}</p>
    </div>
  )
}
