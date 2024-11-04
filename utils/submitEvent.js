import { createDivForItems} from "./creatDivForItems.js"
import {textValue } from "./textValue.js"


export function submitEvent(){
  const buttonSubmit = document.getElementById("button-submit-id")
  
  const submitEvent = buttonSubmit.addEventListener("click", (event)=>{
    event.preventDefault()
    console.log("clicou")
  })
  return submitEvent
}

