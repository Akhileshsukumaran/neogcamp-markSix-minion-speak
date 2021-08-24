var buttonClick = document.querySelector("#btn-click");

var inputTxt = document.querySelector("#txt-input");

buttonClick.addEventListener("click", function clickEventHandler(){
    alert("clicked " + inputTxt.value)
})
