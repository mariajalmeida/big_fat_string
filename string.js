window.addEventListener("DOMContentLoaded", letsBegin);

function letsBegin() {
    const button = document.querySelector("button");
    button.addEventListener("click", loadOutput);
}

function loadOutput() {

    const inputText = document.querySelector("#inputtext").value;
    const input = document.querySelector("#input").value;
    const output = document.querySelector("#output");
    const finalResut = document.createElement("textarea");
    output.appendChild(finalResut);

    if (input == "1") {
        let result = inputText.substring(0, 1).toUpperCase() + inputText.substring(1).toLowerCase();
        finalResut.textContent = result;
    } else if (input == "2") {
        let name = inputText.indexOf(" ");
        result = inputText.substring(0, name);
        finalResut.textContent = result;
    } else if (input == "3") {
        let name = inputText.indexOf(" ");
        result = inputText.substring(0, name);
        finalResut.textContent = result.length;
    } else if (input == "4") {
        let firstSpace = inputText.indexOf(" ");
        let lastSpace = inputText.lastIndexOf(" ");
        result = inputText.substring(firstSpace + 1, lastSpace);
        finalResut.textContent = result;
    } else if (input == "5") {
        result = inputText.endsWith(".png") + inputText.endsWith(".jpg");
        if (result) {
            console.log("true");
            finalResut.textContent = "This is a photo";
        } else {
            console.log("false");
            finalResut.textContent = "This is not a photo";
        }
    } else if (input == "6") {
        // const words = inputText.length;
        // console.log(words, "words")
        // console.log(input.replaceAll(words, "*"));
    } else if (input == "7") {
        let result = inputText.substring(0, 2) + inputText.substring(2, 3).toUpperCase() + inputText.substring(3);
        finalResut.textContent = result;
    } else if (input == "8") {
        if (inputText.includes("-") || inputText.includes(" ")) {
            let dash = inputText.indexOf("-");
            let space = inputText.indexOf(" ");
            result = inputText.substring(dash + 1).charAt(0).toUpperCase() + inputText.substring(space + 1).charAt(0).toUpperCase();
            finalResut.textContent = inputText.substring(0, result);
        }
    }
}