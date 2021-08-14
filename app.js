const inputTranslateText = document.querySelector("#input-text");
const outputTranslateText = document.querySelector("#output-text");

const btnTranslate = document.querySelector("#btn-translate");
btnTranslate.addEventListener("click", btnClick);

const apiURL = "https://api.funtranslations.com/translate/yoda.json";


function btnClick(e) {
    var input = inputTranslateText.value;
    var finalURL = constructURL(input);

    fetch(finalURL)
        .then(response => response.json())
        .then(json => {
            outputTranslateText.innerText = json.contents.translated;
        })
        .catch(() => alert("Rate limiting on try later"))
}

function constructURL(inputText) {
    var encodedURI = encodeURI(inputText);
    return `${apiURL}? text=${encodedURI}`;
}
