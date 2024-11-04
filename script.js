

const inputText = document.getElementById("add-item-id")

const buttonSubmit = document.getElementById("button-submit-id")


inputText.addEventListener("input", () => {
  console.log(inputText.value)
})

buttonSubmit.addEventListener("click", ()=>{
  console.log("clicou!")
})






