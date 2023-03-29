const myParagraph = document.getElementById("my-paragraph");

myParagraph.innerHTML = "This is a new paragraph.";
myParagraph.style.color = "blue";

const myButton = document.getElementById("my-button");

myButton.addEventListener("click", function () {
    const actionStatus = document.getElementById("action-status");
    let clickStatus = document.createElement("div");
    clickStatus.innerHTML = "Button clicked!";
    actionStatus.appendChild(clickStatus);
});