import { createDivForItems } from "./utils/creatDivForItems.js"

const buttonSubmit = document.getElementById("button-submit-id")
const inputText = document.getElementById("add-item-id")

inputText.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault()
    buttonSubmit.click()
  }
})

buttonSubmit.addEventListener("click", (event) => {
  event.preventDefault()

  const inputValueForDivCreation = inputText.value.trim()

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

    parentDiv.classList.remove("display-show")
    parentDiv.classList.add("display-none")

    const disclaimer = document.querySelector(".disclaimer-item-removed")

    disclaimer.classList.remove("display-none")
    disclaimer.classList.add("display-show")
    setTimeout(() => {
      disclaimer.classList.remove("display-show")
      disclaimer.classList.add("display-none")
    }, 2000)
  }
})







