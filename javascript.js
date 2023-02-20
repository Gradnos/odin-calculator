let previousNumber = 0;
let currentNumber = 0;
let actionNumber
let lastOperation;
let equalsLast = false;


const bottomScreen = document.querySelector(".bottom");
const topScreen = document.querySelector(".top");


const numberKeys = document.querySelectorAll(".num");
numberKeys.forEach((key) =>{
    key.addEventListener("click", (e) =>{
        amount = +(e.target.getAttribute("data-key"));

        writeCurrentNumber(amount);
    });
});

const operators = document.querySelectorAll(".operator");
operators.forEach((key) => {
    key.addEventListener("click", (e) => {
        operation = e.target.getAttribute("data-key");
        console.log(operation);
        if(operation === "=") {
            let operated;
            if(!equalsLast) {
                operated = operate(previousNumber,currentNumber, lastOperation);
                setPreviousNumber(currentNumber);
            }
            else{
                operated = operate(currentNumber,previousNumber, lastOperation);
            }
            setCurrentNumber(operated); 
            equalsLast = true;
        }
        else{
            setPreviousNumber(currentNumber);
            setCurrentNumber(0);
            lastOperation = operation;
            equalsLast = false;
        }
    });
});


















function operate(a,b, operation){
    let result = null;
    if(operation === "+"){
        result = add(a,b);
    }
    if(operation === "-"){
        result = subtract(a,b);
    }
    if(operation === "x"){
        result = multiply(a,b);
    }
    if(operation === "/"){
        // CASE OF DIVIDING BY 0 ------------------------------
        if(b === 0){}

        result = divide(a,b);
    }

    console.log(result);
    return result;
}


function setPreviousNumber(a){
    previousNumber = a;
    showPreviousNumber();
}

function showPreviousNumber(){
    topScreen.innerText = previousNumber;
}


function writeCurrentNumber(a){
    currentNumber = currentNumber * 10 + a;
    showCurrentNumber();
}

function setCurrentNumber(a){
    currentNumber = a;
    showCurrentNumber();
}

function showCurrentNumber(){
    bottomScreen.innerText = currentNumber;
}

function add(a,b){
    return a+b;
}

function multiply(a,b){
    return a*b;
}

function divide(a, b){
    return a/b;
}

function subtract(a,b){
    return a-b;
}

function reverse(a){
    return -a;
}

function percent(a){
    return a/100;
}