const div = document.createElement("div")
const label = document.createElement("label")
const input = document.createElement("input")
const imgCheckbox = document.createElement("img")
const imgTrash = document.createElement("img")

div.classList.add("item")

input.classList.add("checkbox")
input.type = "checkbox"

imgCheckbox.classList.add("img-checkbox")
imgCheckbox.src = "assets/icons-checkbox/state=selected.svg"

imgTrash.classList.add("img-trash")
imgTrash.src = "assets/icons/lixeira.png"

export function createDivForItems() {
  label.append(input, imgCheckbox)
  div.append(label, imgTrash)

  return div
}





