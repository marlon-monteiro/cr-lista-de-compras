export function createDivForItems(inputValueForDivCreation) {
  const div = document.createElement("div")
  const label = document.createElement("label")
  const input = document.createElement("input")
  const imgCheckbox = document.createElement("img")
  const imgTrash = document.createElement("img")
  const span = document.createElement("span")
  
  div.classList.add("item", "display-show")
  
  input.classList.add("checkbox")
  input.type = "checkbox"
  
  imgCheckbox.classList.add("img-checkbox", "display-none")
  imgCheckbox.src = "assets/icons-checkbox/state=selected.svg"
  
  imgTrash.classList.add("img-trash")
  imgTrash.src = "assets/icons/lixeira.png"

  label.append(input, imgCheckbox)
  span.textContent = inputValueForDivCreation
  div.append(label, span, imgTrash)
  return div
}





