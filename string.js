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
    }
}