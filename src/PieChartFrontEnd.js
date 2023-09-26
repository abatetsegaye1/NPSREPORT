import {React,useContext} from 'react'
import { Bar, Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";

export default function PieChartFrontEnd({state_back_end}) {

    const {state } = state_back_end;
    let {unlikelyRate,
    veryLikelyRate, neutralRate, bar,showLabel
    }=state;
  {console.log("state for backend",state)}
  const data = {
    labels: ["unLikely", "likely", "very likely"],
    datasets: [
      {
        label: "# of Votes",
        data: [35, 25, 22],
        backgroundColor: [
          unlikelyRate,
          neutralRate,
          veryLikelyRate,
        ],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div style={{ width: 320, textAlign: "center" }}>    
    {bar ? <Bar data={data} width={10} height={10} /> : <Pie data={data} width={10} height={10} />  }  
    </div>
  );
}