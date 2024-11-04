export function textValue() {

  const inputText = document.getElementById("add-item-id")

  inputText.addEventListener("input", (event) => {
    event.preventDefault()
    console.log(inputText.value)

    return inputText.value
  })
}