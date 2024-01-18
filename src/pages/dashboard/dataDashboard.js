
import React from "react";
import { Status } from "../../component/table/table"
const date = new Date(); 
const formatter = new Intl.DateTimeFormat('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' })
const formattedDate = formatter.format(date);

// Data Table Dashboard
export const dataTable = [
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
    status: 'gagal'
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
    status: 'gagal'
  },
  {
    id: 5,
    name: 'Jhon Executif',
    transaction: `${formattedDate}`,
    status: 'Berhasil'
  },
]
//colums table
export const columns = [
  {
    name: 'No',
    cell: row => row.id,
    width: '5%',
    center: 'true',
  },
  {
    name: 'Name',
    cell: row => row.name,
  },
  {
    name: 'Status',
    cell: row => (<Status statusData={row.status} />),
  },
  {
    name: 'Terakhir Transaksi',
    cell: row => row.transaction,
  },
]

// data Line Chart

export const labelsLine = ['Jan','Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Des']
export const dataLineChart =[ 1000000,3000000,8000000,4000000,7000000,2000000,6000000,9000000,6000000,1000000,2000000,4000000]


// data Doughnut Chart 

export const labelsDoughnut= ['Tahun lalu', 'Bulan lalu', 'Minggu lalu']
export const dataDoughnut = [9000000, 3000000, 1000000]
