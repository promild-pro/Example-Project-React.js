import React, { useEffect, useState } from "react"
import LayOut from "../../component/layOut"
import Card from "../../component/card"
import { useDispatch, useSelector } from "react-redux"
import { ApiJson } from "../../redux/counter"
import DoughnutChart from "../../component/chart/doughnut"
import Table from "../../component/table"
import { LineChart } from "../../component/chart/line/lineChart"
import { columns,
  dataTable,
  labelsLine,
  dataLineChart,
  labelsDoughnut,
  dataDoughnut } from "./dataDashboard"

export const Dashboard = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const [value, setValue] = useState(false)

  useEffect(() => {
    dispatch(ApiJson())
  }, [dispatch])

  const handleButton = () => {
    setValue(!value)
  }
  return(
    <div>
      <LayOut title="Dashboard">
        <div className="flex justify-between w-full">
          <div className="w-[65%]">
            <LineChart labelsData="Tahun Lalu" text="Data Tahun Lalu" datasets={dataLineChart} labels={labelsLine} />
          </div>
          <div className="w-[34%] rounded-lg bg-white">
            <DoughnutChart text='' label={labelsDoughnut} dataDougnut={dataDoughnut} />
          </div>
        </div>
        <div className="w-full py-5">
          <Table title="Data Transaksi" columns={columns} data={dataTable}/>
        </div>
        <button onClick={handleButton} className="p-2 bg-white hover:bg-slate-200 rounded-lg  font-bold">lihat Lainya</button>
        <div className={value ? '' : 'hidden'}>
          <Card data={user.data}/>
        </div>
      </LayOut>
    </div>
  )
}