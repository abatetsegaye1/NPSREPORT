import "./frontend.scss"
import "./templatefront.scss"
import React, { useState } from "react"
import ReactDOM from "react-dom"
import { ScaleProvider } from "./components/ScaleContext"


import PieChart from "./PieChartFrontEnd"
import PieChartFrontEnd from "./PieChartFrontEnd"


const divsToUpdate = document.querySelectorAll(".boilerplate-update-me")

divsToUpdate.forEach(div => {
  const data = JSON.parse(div.querySelector("pre").innerText)
  console.log(data);
  ReactDOM.render(<ScaleProvider><OurComponent {...data} /></ScaleProvider>, div)
  div.classList.remove("boilerplate-update-me")
  div.classList.add("boilerplate-update-front")
})

function OurComponent({state}) {
   
  return <PieChartFrontEnd  state_back_end={{state:state}}/>
}
