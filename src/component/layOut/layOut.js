import React, { useEffect, useRef, useState } from "react";
import Sidebar from "../sidebar";
import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types'
import {  useSelector } from "react-redux";
// import { removeToken } from "../../storage";
import {removeToken} from '../../storage'

export const LayOut = ({title,children}) => {
  const buttonRef = useRef()
  const navigate = useNavigate('')
  const [pop, setPop] = useState(false)
  const [valueSite, setValue] = useState(true)
  const data= useSelector((state) => state.login)
  const name = data.user.username

  const handleOutside = () => {
    setValue(!valueSite)
  }
  const handlePopup = () => {
    setPop(!pop)
  }
  const handleOut = (e) => {
    if(!buttonRef.current.contains(e.target)){
      setPop(false)
    }
  }
  const handleLogOut = () => {
    removeToken()
    navigate('/')
    
  }
  useEffect(() => {
    document.addEventListener('mousedown', handleOut)
    return() => {
      document.removeEventListener('mousedown', handleOut)
    }
  },[pop])
  return(
    <div className="flex bg-green-100">
      <Sidebar handlOut={handleOutside}/>
      <div className={`h-16 flex justify-between items-center shadow-md  fixed z-50  bg-white ${valueSite ? 'w-[80%] ml-[20%] duration-200': 'w-full ml-20 pr-20 duration-200'}`}>
        <h1 className="pl-5 text-2xl font-bold">Welcome to Example Project </h1>
        <h1 className="text-2xl font-bold">{title}</h1>
        <button 
          onClick={handlePopup}
          ref={buttonRef}
          className="justify-between flex items-center pr-5 ">
          <h1 className="pr-2">{name}</h1>
          <CgProfile size={'30px'} />
          {pop ? 
            (<button
              onClick={() => handleLogOut()}
              className={`flex items-center mt-20  p-2 shadow-lg rounded-lg absolute z-10 bg-green-200 ${valueSite ? 'right-9': 'right-28'}`}>
              <CiLogout size={'20px'} />
              <h1 className="pl-2">LogOut</h1>
            </button>): null}
        </button>
      </div>
      <div className={`mt-16 relative ${valueSite ? 'w-[80%]  ml-[20%] duration-200' :' w-full ml-20 duration-200' }`}>
        <div className="p-5">
          {children}
          <h1 className="text-center italic ">---  Data ini diambil dari jsonPlaceholder  ---</h1>
        </div>
      </div>
      {/* </div> */}
    </div>
  )
}

LayOut.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}