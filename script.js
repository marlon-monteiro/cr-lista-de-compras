import { createDivForItems } from "./utils/creatDivForItems.js"

const buttonSubmit = document.getElementById("button-submit-id")

buttonSubmit.addEventListener("click", (event) => {
  event.preventDefault()

  const inputText = document.getElementById("add-item-id")
  const inputValueForDivCreation = inputText.value.trim()

  console.log(inputValueForDivCreation)

  if (inputValueForDivCreation) {
    const divCreated = createDivForItems(inputValueForDivCreation)

    const divWithAllItems = document.querySelector(".items")
    divWithAllItems.append(divCreated)

    inputText.value = ""
  }
})


document.querySelector(".items").addEventListener("click", (event) => {
  if (event.target.classList.contains("img-trash")) {
    const parentDiv = event.target.parentElement
    console.log("parentDiv", parentDiv)

    parentDiv.classList.remove("display-show")
    parentDiv.classList.add("display-none")

    const disclaimer = document.querySelector(".disclaimer-item-removed")

    disclaimer.classList.remove("display-none")
    disclaimer.classList.add("display-show")
  }
})







