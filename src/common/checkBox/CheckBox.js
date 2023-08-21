import React from 'react'
import './CheckBox.css'

export default function CheckBox({name,labelFor,label,num,value}) {
  return (
    <div className='checkbox'>
      <div className='checkboxInput'>
      <input 
      type="checkbox" value={value} name={name} />
    <label htmlFor={labelFor}>{label}</label>
      </div>

    <p className='checkBoxNum'>{num}</p>
    </div>
  )
}
