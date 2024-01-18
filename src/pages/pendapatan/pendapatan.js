import React from "react";
import DoughnutChart from "../../component/chart/doughnut/doughnut";
// import DoughnutChart from "../../component/chart/doughnut";
import LayOut from "../../component/layOut";
import { Table } from "../../component/table/table";
import { LineChart } from "../../component/chart/line/lineChart";

export const Pendapatan = () => {
  const labels = ["Senin", "Selasa", "Rabu", "Kamis", "Jum`at","Sabtu", "Minggu"]
  const formatvalue = (value) => {
    const numeric = Number(value)
    return numeric.toLocaleString('id-ID')
  }  
  const columns = [
    {
      name: 'No',
      cell: row => row.id,
      width: '5%',
      center: 'true'
    },
    {
      name: 'Hari',
      cell: row => row.day
    },
    {
      name: 'Laba kotor',
      cell: row => row.labaKotor
    },
    {
      name: 'Laba Bersih',
      cell: row => formatvalue(row.labaBersih)
    },
  ]

  const dataTable= [
    {
      id: 1,
      day: 'Senin',
      labaKotor: '30.0000',
      labaBersih: 15000,
    },
    {
      id: 2,
      day: 'Selasa',
      labaKotor: '40.0000',
      labaBersih: 35000,
    },
    {
      id: 3,
      day: 'Rabu',
      labaKotor: '90.0000',
      labaBersih: 75000,
    },
    {
      id: 4,
      day: 'Kamis',
      labaKotor: '40.0000',
      labaBersih: 30000,
    },
    {
      id: 5,
      day: 'Jum`at',
      labaKotor: '70.0000',
      labaBersih: 50000,
    },
    {
      id: 6,
      day: 'Sabtu',
      labaKotor: '100.0000',
      labaBersih: 95000,
    },
    {
      id: 7,
      day: 'Minggu',
      labaKotor: '30.0000',
      labaBersih: 15000,
    },
  ]
  const dataLine = dataTable.map(item => item.labaBersih)
 

  return(
    <LayOut  title="Pendapatan">
      <div className="flex pb-5 justify-between">
        <div className="w-[65%]">
          <LineChart text="Data Mingguan" labelsData="Laba Bersih" labels={labels} datasets={dataLine}/>
        </div>
        <div className="w-[34%] bg-white rounded-lg">
          <DoughnutChart  text='Data Mingguan' label={labels} dataDougnut={dataLine} />
        </div>
      </div>
      <div>
        <Table title="Table Pendapatan" columns={columns} data={dataTable}/>
      </div>
    </LayOut>
  )
}