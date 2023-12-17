
function showInnerText() {
    let testElement = document.getElementById("testElement");
    let resultElement = document.getElementById("result");
    resultElement.innerText = testElement.innerText;
}

function showTextContent() {
    let testElement = document.getElementById("testElement");
    let resultElement = document.getElementById("result");
    resultElement.textContent = testElement.textContent;

}

showInnerText();
//showTextContent();