import React from "react";
import LayOut from "../../component/layOut";
import Table from "../../component/table";
import { Status } from "../../component/table/table";

export const Transaction = () => {
  const date =new Date(); 
  const formatter = new Intl.DateTimeFormat('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' })
  const formattedDate = formatter.format(date);
  const data = [
    {
      id: 1,
      name: 'johan',
      transaction: `${formattedDate}`,
      status: 'Berhasil',
    },
    {
      id: 2,
      name: 'jhon',
      transaction: `${formattedDate}`,
      status: 'Gagal'
    },
    {
      id: 3,
      name: 'Rolex',
      transaction: `${formattedDate}`,
      status: 'Berhasil'
    },
    {
      id: 4,
      name: 'Mixxie',
      transaction: `${formattedDate}`,
      status: 'Gagal'
    },
    {
      id: 5,
      name: 'Jhon Executif',
      transaction: `${formattedDate}`,
      status: 'Berhasil'
    },
  ]

  const columns = [
    {
      name: 'No',
      selector: row => row.id,
      maxWidth: '10px',
      center: true,
    },
    {
      name: 'Name',
      selector: row => row.name,
    },
    {
      name: 'Status',
      selector: row => (<Status statusData={row.status} />),
    },
    {
      name: 'Terakhir Transaksi',
      selector: row => row.transaction,
    },
  ]
  
  return(
    <LayOut title="Transaction">
      <div className="  p-5 w-full pt-20">
        <Table title="Table Transaksi" data={data} columns={columns} />
      </div>
    </LayOut>
  )
}

