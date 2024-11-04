import { createDivForItems } from "./utils/creatDivForItems.js"

const buttonSubmit = document.getElementById("button-submit-id")

buttonSubmit.addEventListener("click", () => {

  const inputText = document.getElementById("add-item-id")
  const inputValueForDivCreation = inputText.value.trim()

  console.log(inputValueForDivCreation)

  if (inputValueForDivCreation) {
    const divCreated = createDivForItems(inputValueForDivCreation)
    const divItems = document.querySelector(".items")

    divItems.append(divCreated)

    inputText.value = ""
  }
})



