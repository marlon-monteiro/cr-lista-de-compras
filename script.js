const inputText = document.getElementById("add-item-id")

const buttonSubmit = document.getElementById("button-submit-id")


inputText.addEventListener("input", () => {
  console.log(inputText)
  console.log(inputText.value)
  console.log(buttonSubmit)
})

buttonSubmit.addEventListener("click", ()=>{
  console.log("clicou!")
})


