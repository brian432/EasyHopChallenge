import React, { FC } from 'react'
import './buttonSubmit.css'
interface ButtonSubmitProps {
  isValid: boolean
  dirty: boolean
}
const ButtonSubmit: FC<ButtonSubmitProps> = ({ isValid, dirty }) => {
  const buttonClassName = !isValid || !dirty ? 'disabled' : 'btn';
  return (
    <div className='divButton'>
      <button type='submit' className={buttonClassName} disabled={!isValid || !dirty}>
        Submit
      </button>
    </div>
  )
}
export default ButtonSubmit