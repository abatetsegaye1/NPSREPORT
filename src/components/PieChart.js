
/*
import {React,useContext} from 'react'

import { Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { ScaleContext } from './ScaleContext'
export default function PieChart() {
  const { state, dispatch } = useContext(ScaleContext);
 {console.log("unlikely rate",state)}
  const data = {
   // labels: labels,
    datasets: [
      {
        // label: "My First dataset",
        //backgroundColor: "rgb(255, 99, 132)",

        borderColor: "rgb(255, 99, 132)",
      
        data: [5, 10, 35],
        backgroundColor: [
          state.unlikelyRate,
          state.neutralRate ,
          state.veryLikelyRate,
        ],
      },
    ],
  };
  return (
    <div style={{ width: 250, height: '150px' }}>    
      <Pie data={data}  />
    </div>
  );
}
*/
// ./components/BarChart.js

import {React,useContext} from "react";
import Chart from "chart.js/auto";
import { Bar, Pie } from "react-chartjs-2";
import { ScaleContext } from "./ScaleContext";

const PieChart = () => {

  const {state,dispatch}=useContext(ScaleContext)
  const labels = ["Likely", "Unlikely", "Most Likely"];
  const data = {
    // labels: labels,
    datasets: [
      {
        // label: "My First dataset",
        //backgroundColor: "rgb(255, 99, 132)",

        borderColor: "rgb(255, 99, 132)",
        data: [5, 10, 35],
        backgroundColor: [
          state.unlikelyRate,
          state.neutralRate ,
          state.veryLikelyRate,
        ],
      },
    ],
  };
  return (
    <div style={{ width: 250, height: '150px'}}>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
