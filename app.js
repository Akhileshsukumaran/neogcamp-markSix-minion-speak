var buttonClick = document.querySelector("#btn-click");

var inputTxt = document.querySelector("#txt-input");

var outputTxt = document.querySelector(".output");

buttonClick.addEventListener("click", function clickEventHandler(){
    outputTxt.innerHTML = "hello " + inputTxt.value;
})
