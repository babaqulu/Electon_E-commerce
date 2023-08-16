import './Radio.css'

export default function Radio({className}) {
  return (
    <>
      <input type='radio' name='color' className={className}/>
    </>
  )
}
