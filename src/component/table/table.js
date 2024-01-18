import React from "react";
import DataTable from "react-data-table-component";
import PropTypes from 'prop-types'

export const Table = ({title, columns, data}) => {
  const customStyles ={
    headCells:{
      style:{
        backgroundColor: '#f2f2f2',
        fontWeight: 'bold'
      }
    },

  }
  return(
    <div className="p-5 rounded-lg bg-white " >
      <h1 className="font-bold text-3xl text-center pb-5">{title}</h1>
      <DataTable 
        columns={columns} 
        data={data} 
        customStyles={customStyles} 
        responsive={true} 
        highlightOnHover={true} 
        fixedHeaderScrollHeight={'70vh'}
        fixedHeader={true} />
    </div>
  )
}
export const Status = ({statusData}) => {
  return(
    <div className={` p-2 w-20 flex justify-center rounded-md ${statusData === 'Berhasil' ? 'bg-green-400' : 'bg-red-400' }`}>
      {statusData}
    </div>
  )
}

Table.propTypes = {
  title: PropTypes.string.isRequired,
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired
}
Status.propTypes ={
  statusData: PropTypes.string.isRequired
}