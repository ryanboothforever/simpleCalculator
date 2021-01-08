/**
 * BK 1-8-21
 * Rather than using document selectors, i'd rather see onclick events in the HTML
 * This is the way frameworks handle these events- it's good practice to get into
 * 
 * You're missing a clear button, fyi
 */

//When a user clicks on a number, the number appears in the h2
const numbers = document.getElementsByTagName("span");
Array.from(numbers).forEach(elements => elements.addEventListener("click", addToDisplay))

//When user clicks an operator, the operator appears in the h2

const opSign = document.querySelectorAll(".operator");
Array.from(opSign).forEach(elements => elements.addEventListener("click", addToDisplay))

const finalResult = document.querySelector(".equal-sign");
finalResult.addEventListener("click", tallyResult)

function addToDisplay(e) {
    const outcome = document.querySelector("#beep");
    const itemClicked = e.path[0].innerHTML;
    if (itemClicked <= 9) {
        const itemNumber = Number(itemClicked);
        outcome.innerHTML += itemNumber;
    } else if (itemClicked === "/" || itemClicked === "*" || itemClicked === "-" || itemClicked === "+") {
        // BK Time to learn about template strings!
        outcome.innerHTML += ` ${itemClicked} `;
    }
   const myParts = outcome.innerHTML.split(" ")
   return myParts;

}

//When user clicks the "=", do math of what is in the h2, and then re assign the h2 to that new value.
/**
 * BK - Setting the h2 is fine in vanilla JS- in a framework you would assign a variable in the component to the end value and call that variable in the DOM.
 * Again, fine for now, but just for future reference
 */
function tallyResult() {
    const outcome = document.querySelector("#beep");
    /**
     * BK - array is a good choice here as you have done. That would potentially allow you to do multiple operations
     * Consider: "1 + 2 * 3"
     * Operators (+, -, etc) are in odd places, numbers in even
     * or in JS speak, for i in myParts, if i % 2 === 0, it is a number
     * You'd then have to deal with order of operations- e.g. * happens before +
     * 
     * This if else statement isn't bad or wrong necessarily, but I'm going to revamp it a bit to show you some object oriented ideas that can be really handy when you get into longer chains-
     * what if this had 10 else ifs? Would be kinda gnarly looking
     */
    const ops = {
        '+': (first, second) => first + second,
        '-': (first, second) => first - second,
        '*': (first, second) => first * second,
        '/': (first, second) => first / second
    };
    const myParts = outcome.innerHTML.split(" ");
    let result;
    /**
     * BK ops is the constant we declared above
     * let's assume myParts[1] is '+'
     * so, ops['+'] is a function in that declaration, hence ops['+']() calls that function
     * that function takes two arguments, first number and second number
     * those are the two arguments i passed in
     */
    result = ops[myParts[1]](Number(myParts[0]), Number(myParts[2]));

    outcome.innerHTML = result;
}