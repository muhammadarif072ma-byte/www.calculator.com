//let btn=document.querySelector("button");
/*btn.onclick =(e) =>{

    console.log(e);
    console.log(e.type);
}*/

/*let box=document.getElementById("box");
box.onmouseover=()=>{
    console.log("you have entered the box");
}*/


/*let btn=addEventListener("click",()=>{
console.log("the buttton was clicked");
});*/



/*let btn=document.getElementById("btn");
btn.onclick = () =>{
    btn.innerText="clicked";
};*/


/*let btn = document.getElementById("btn");

btn.onclick = () => {
    btn.innerText = "Clicked!";
}


let heading=document.getElementById("heading");
btn.onclick = ()=>{
    heading.innerText="welcome to java script";
}*/


/*let box=document.getElementById("box");
box.style.width="100px";
box.style.height="100px";
box.style.backgroundColor="blue";
box.onmouseover = ()=>{
    box.style.backgroundColor="green";
}


let btn=document.getElementById("btn");
btn.addEventListener("click", ()=>{
    console.log("hellow to javascript");
});


 btn=document.getElementById("btn");
btn.addEventListener("click", ()=>{
    console.log("welcome to website");
});*/


let currentNumber = "";
let previousNumber = "";
let operator = "";


// Display ko access karna
const currentDisplay = document.getElementById("current");
const previousDisplay = document.getElementById("previous");


// Number add karna
function appendNumber(number) {

    // Agar 2 decimal points hon to stop
    if (number === "." && currentNumber.includes(".")) {
        return;
    }

    currentNumber += number;

    currentDisplay.innerText = currentNumber;
}


// Operator select karna
function chooseOperator(selectedOperator) {

    // Agar number nahi hai
    if (currentNumber === "") {
        return;
    }

    // Agar pehle se calculation pending hai
    if (previousNumber !== "") {
        calculate();
    }

    operator = selectedOperator;

    previousNumber = currentNumber;

    currentNumber = "";

    previousDisplay.innerText =
        previousNumber + " " + operator;
}


// Calculation
function calculate() {

    if (previousNumber === "" || currentNumber === "") {
        return;
    }

    let num1 = parseFloat(previousNumber);

    let num2 = parseFloat(currentNumber);

    let result;


    switch (operator) {

        case "+":
            result = num1 + num2;
            break;


        case "-":
            result = num1 - num2;
            break;


        case "*":
            result = num1 * num2;
            break;


        case "/":

            if (num2 === 0) {
                currentDisplay.innerText = "Error";
                return;
            }

            result = num1 / num2;
            break;
    }


    currentNumber = result.toString();

    previousNumber = "";

    operator = "";


    currentDisplay.innerText = currentNumber;

    previousDisplay.innerText = "";
}


// Calculator clear karna
function clearDisplay() {

    currentNumber = "";

    previousNumber = "";

    operator = "";

    currentDisplay.innerText = "0";

    previousDisplay.innerText = "";
}


// Last digit delete karna
function deleteNumber() {

    currentNumber = currentNumber.slice(0, -1);


    if (currentNumber === "") {

        currentDisplay.innerText = "0";

    } else {

        currentDisplay.innerText = currentNumber;
    }
}


// Percentage
function percentage() {

    if (currentNumber === "") {
        return;
    }

    currentNumber =
        (parseFloat(currentNumber) / 100).toString();

    currentDisplay.innerText = currentNumber;
}


// Keyboard se calculator chalana
document.addEventListener("keydown", function(event) {


    // Numbers
    if (event.key >= "0" && event.key <= "9") {

        appendNumber(event.key);
    }


    // Decimal
    if (event.key === ".") {

        appendNumber(".");
    }


    // Operators
    if (
        event.key === "+" ||
        event.key === "-" ||
        event.key === "*" ||
        event.key === "/"
    ) {

        chooseOperator(event.key);
    }


    // Equal
    if (event.key === "Enter" || event.key === "=") {

        calculate();
    }


    // Backspace
    if (event.key === "Backspace") {

        deleteNumber();
    }


    // Escape = Clear
    if (event.key === "Escape") {

        clearDisplay();
    }


    // Percentage
    if (event.key === "%") {

        percentage();
    }

});



























