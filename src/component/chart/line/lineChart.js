import React from "react"
import { Chart as 
ChartJS, 
CategoryScale,
LinearScale,
PointElement,
LineElement,
Title,
Tooltip,
Legend } from "chart.js"
import { Line } from "react-chartjs-2"
import PropTypes from 'prop-types'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)


export const LineChart = ({labels, labelsData,datasets, text}) => {

  const options = {
    responsive: true,
    plugins: {
      legend: {
        Position: 'top',
      },
      title: {
        display: false,
        text: 'Chart.JS Line Chart'
      }
    }
  }
  const data= {
    labels: labels,
    datasets: [
      {
        label: labelsData,
        data: datasets,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      }
    ]
  }
  return(
    <div className="bg-white p-5 rounded-lg">
      <h1 className="text-xl font-bold">{text}</h1>
      <Line options={options} data={data}/>
    </div>
  )
}

LineChart.propTypes ={
  text: PropTypes.string.isRequired,
  labelsData: PropTypes.string.isRequired,
  labels: PropTypes.array.isRequired,
  datasets: PropTypes.array.isRequired
}