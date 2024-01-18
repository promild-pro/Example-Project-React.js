import React from "react";
import PropTypes from 'prop-types'
export const Card = ({data, buttonDetail, buttonOnclik }) => {

  function getRandomColor () {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
  return(
    <div className="flex flex-wrap">
      {data.map((item, index) => (
        <div  key={index} className="bg-white shadow-sm hover:shadow-2xl w-64 rounded-md m-2" >
          <div className="flex justify-center p-3 ">
            <div className={`w-60 h-48  flex items-center justify-center rounded-md bg-opacity-30 `} style={{backgroundColor: getRandomColor()}}>
              {item.id}
            </div>
          </div>
          <div className="flex justify-center">
            <h1 className="w-32 p-4 truncate">{item.name}</h1>
          </div>
          {
            buttonDetail && (
              <div className="flex justify-center px-3 pb-3">
                <button 
                  onClick={buttonOnclik}
                  className="bg-slate-200 hover:bg-slate-300 rounded-lg py-2 w-full">
                Lihat Detail
                </button>
              </div>
            )
          }
        </div>
      ))}
    </div>
  )
}

Card.propTypes = {
  data : PropTypes.array.isRequired,
  buttonDetail: PropTypes.bool,
  buttonOnclik: PropTypes.func,
}