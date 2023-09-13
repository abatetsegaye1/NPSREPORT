import {React,useContext} from 'react'
import { ScaleContext } from './ScaleContext'
import { Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";

export default function PieChart({unlikely,likely,veryLikely}) {
  const { state, dispatch } = useContext(ScaleContext);
 
  const data = {
    labels: ["unLikely", "likely", "very likely"],
    datasets: [
      {
        label: "# of Votes",
        data: [35, 25, 22],
        backgroundColor: [
          state.unlikelyRate,
          state.neutralRate,
          state.veryLikelyRate,
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
    <div style={{ width: 650, textAlign: "center" }}>    
      <Pie data={data} width={50} height={50} />
    </div>
  );
}