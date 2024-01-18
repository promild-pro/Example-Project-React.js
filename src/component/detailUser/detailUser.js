import React from "react";
import PropTypes from 'prop-types'

export const DetailUser = ({onClick}) => {
  return(
    <div className="p-5 ">
      <div className="w-96 h-96 bg-slate-300 rounded-xl flex justify-center items-center">
        <h1>img</h1>
      </div>
      <div>
        <table className="font-bold">
          <tbody>
            <tr>
              <td>Nama</td>
              <td>:</td>
              <td>M. Zainul Qirom</td>
            </tr>
            <tr>
              <td>Alamat</td>
              <td>:</td>
              <td>Konohagakure</td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>:</td>
              <td>081234567</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        hanya menampilkan dan tidak menyertakan data sesuai ID
      </div>
      <button 
        className="bg-slate-200 hover:bg-slate-400 rounded-lg w-full py-2"
        onClick={onClick}>
            Close
      </button>
    </div>
  )
}

DetailUser.propTypes ={
  onClick: PropTypes.func
}