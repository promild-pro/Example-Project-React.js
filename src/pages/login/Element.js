import React, { useState } from "react"
import PropTypes from 'prop-types'
import { IoEyeOutline,IoEyeOffOutline } from "react-icons/io5";

export const Input = ({
  head, 
  type,  
  onChange, 
  placeholder, 
  EyePassword, 
  onClick}) => {
  const [state, setState] = useState(false)
  const Eye =() => {
    const handleClick = () => {
      setState(!state)
    }
    return(
      <button onClick={handleClick}>
        {state ? <IoEyeOutline size='20px' /> : <IoEyeOffOutline size='20px' />}
      </button>
    
    )
  }
  return(
    <div className="w-full  px-4 py-3 relative">
      <h1 className="text-lg text-slate-800 pb-2 pl-2">{head}</h1>
      <input 
        type={type}
        onChange={onChange}  
        placeholder={placeholder} 
        className="w-full p-5 outline-none rounded-xl relative"
      />
      <div className="absolute right-8 bottom-[23%]">    
        {EyePassword &&
          (<button onClick={onClick}><Eye  /></button>)}
      </div>
    </div>
  )
}
export const Button = ({hanldeButton, textButton}) => {
  return(
    <div className="mx-4 my-3">
      <button 
        onClick={hanldeButton}
        className='bg-green-300 hover:bg-green-400 w-full p-5 rounded-xl font-bold'>
        {textButton}
      </button>
    </div>
    
  )
}

Input.propTypes = {
  head: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  EyePassword: PropTypes.bool,
  onClick: PropTypes.func
}

Button.propTypes = {
  hanldeButton: PropTypes.func,
  textButton: PropTypes.string.isRequired
}