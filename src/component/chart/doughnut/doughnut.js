import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from "react-chartjs-2";
import PropTypes from 'prop-types'
ChartJS.register(ArcElement, Tooltip, Legend);



export const DoughnutChart = ({text,label, dataDougnut}) => {
  const data = {
    labels: label,
    datasets: [
      {
        data: dataDougnut,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };
  const options = {
    plugins:{
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle'
        }
      }},
    elements: {
      arc: {
        borderWidth: 2
      }
    }
  };

  return (
    <div className="bg-white rounded-2xl p-5 ">
      <h1 className="text-xl font-bold">{text}</h1>
      <Doughnut  data={data}  options={options}/>
    </div>
  )
};

export default DoughnutChart;


DoughnutChart.propTypes ={
  label: PropTypes.array.isRequired,
  text: PropTypes.string.isRequired,
  dataDougnut: PropTypes.array.isRequired
}