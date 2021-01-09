//When a user clicks on a number, the number appears in the h2
const numbers = document.getElementsByTagName("span");
Array.from(numbers).forEach(elements => elements.addEventListener("click", addToDisplay)) 

//When user clicks an operator, the operator appears in the h2

const opSign = document.querySelectorAll(".operator");
Array.from(opSign).forEach(elements => elements.addEventListener("click", addToDisplay))

const finalResult = document.querySelector(".equal-sign");
finalResult.addEventListener("click", tallyResult)

function addToDisplay(e) {
    let outcome = document.querySelector("#beep");
    let itemClicked = e.path[0].innerHTML;
    if (itemClicked <= 9) {
        let itemNumber = Number(itemClicked);
        outcome.innerHTML += itemNumber;
    } else if (itemClicked === "/" || itemClicked === "*" || itemClicked === "-" || itemClicked === "+") {
        outcome.innerHTML += " " + itemClicked + " ";
    }
   let myParts =  outcome.innerHTML.split(" ")
   return myParts;

}

//When user clicks the "=", do math of what is in the h2, and then re assign the h2 to that new value.

function tallyResult() {
    let outcome = document.querySelector("#beep");
    let myParts = outcome.innerHTML.split(" ")
    let result;
    if (myParts[1] === "+") {
        result = Number(myParts[0]) + Number(myParts[2])
    } else if (myParts[1] === "-") {
        result = Number(myParts[0]) - Number(myParts[2])
    } else if (myParts[1] === "*") {
        result = Number(myParts[0]) * Number(myParts[2])
    } else if (myParts[1] === "/") {
        result = Number(myParts[0]) / Number(myParts[2])
    } else{
        return false
    }  
    outcome.innerHTML = result
}

//Clear button clears the display 

document.querySelector("#clear").addEventListener("click", clearDisplay)

function clearDisplay(){
    document.querySelector("#beep").innerHTML = ""
}