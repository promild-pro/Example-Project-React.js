import React, {  useState } from "react"
import { FaAngleDoubleLeft,FaChartPie,FaDatabase } from 'react-icons/fa'
import { useNavigate } from "react-router-dom"
import { FaHome } from "react-icons/fa";
import { AiOutlineTransaction } from "react-icons/ai";
import PropTypes from 'prop-types'


export const Sidebar = ({handlOut}) => {
  const navigate = useNavigate('')
  const [side, setSide] = useState(true)
  const handleSide = () => {
    setSide(!side)
  }
 
  const chilSidebar = [
    {
      Name: 'Dashboard',
      Icons: <FaHome size={'30px'}/>,
      path: '/dashboard',
    },
    {
      Name: 'Transaction',
      Icons: <AiOutlineTransaction size={'30px'}/>,
      path: '/transaction'
    },
    {
      Name: 'Pendapatan',
      Icons: <FaChartPie size={'30px'} />,
      path: '/chart'
    },
    {
      Name:'Data',
      Icons: <FaDatabase  size={'30px'} />,
      path: '/dataUser'
    },
  ]
  return(
    <div className={`bg-green-500 h-dvh fixed  ${side ? 'w-[20%] ease-in duration-200' : 'w-20 ease-out duration-200'}`}>
      <div className="relative">
        <button onClick={() => {handleSide(), handlOut()}} className={`right-3 absolute ${side ? 'rotate-0' : 'rotate-180'}`} >
          <div className="p-2 hover:bg-green-300 rounded-md m-2 ">
            <FaAngleDoubleLeft size={'20px'} color="white"/>
          </div>
        </button>
      </div>
      <div>
        <h1 className={`text-white  text-5xl font-bold p-2 ${side ? ' visible' : 'invisible'} `}>Sidebar</h1>
      </div> 
      <div>
        <ul>
          <li>{chilSidebar.map((item, index) => (
            <div key={index}>
              <button 
                className="text-white p-5 flex w-full hover:bg-green-300"
                onClick={() => navigate(item.path)}>
                <div className="flex items-center">
                  {item.Icons}
                  <h1 className={`pl-3 text-2xl font-bold ${side ? '' : ' duration-700 hidden '}`}>
                    {item.Name}
                  </h1>
                </div>
              </button>
            </div>
          ))} 
          </li>
        </ul>
      </div>
    </div>
  )
}

Sidebar.propTypes = {
  handlOut : PropTypes.func
}