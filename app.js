var buttonClick = document.querySelector("#btn-click");

var inputTxt = document.querySelector("#txt-input");

var outputTxt = document.querySelector(".output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

// error handler function
function errorHandler(error){
    console.log("error occured", error);
}

//function to get converted text
function getUrl(text){
    return fetch(serverURL + "?text=" + text)
    .then(response => response.json())
    // .then(json => console.log(json))
    // .then(json => console.log(json.contents.translated))
    .then(json => {
        var translatedText = json.contents.translated;
        outputTxt.innerText = translatedText; //writes the translated text to the output div
    })
    .catch(errorHandler);
}

//button click event
buttonClick.addEventListener("click", function clickEventHandler(){
    
    getUrl(inputTxt.value);

})
