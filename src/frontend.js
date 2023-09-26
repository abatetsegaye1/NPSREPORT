import "./frontend.scss"
import "./templatefront.scss"
import React, { useState } from "react"
import ReactDOM from "react-dom"
import { ScaleProvider } from "./components/ScaleContext"



import PieChartFrontEnd from "./PieChartFrontEnd"


const divsToUpdate = document.querySelectorAll(".scalereport-update")

divsToUpdate.forEach(div => {
  const data = JSON.parse(div.querySelector("pre").innerText)
  console.log("data from pre class div",data);
  ReactDOM.render(<ScaleProvider><OurComponent {...data} /></ScaleProvider>, div)
  div.classList.remove("scalereport-update")
  div.classList.add("scalereport-update-front")
})

function OurComponent({state}) {
   console.log("state from front end",state)
  return <PieChartFrontEnd  state_back_end={{state:state}}/>
}
