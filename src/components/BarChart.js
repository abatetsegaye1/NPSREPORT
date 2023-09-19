// ./components/BarChart.js

import {React,useContext} from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { ScaleContext } from "./ScaleContext";

const BarChart = () => {

  const {state,dispatch}=useContext(ScaleContext)
  const labels = ["Likely", "Unlikely", "Most Likely"];
  const data = {
    labels: labels,
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
      <Bar data={data} />
    </div>
  );
};

export default BarChart;