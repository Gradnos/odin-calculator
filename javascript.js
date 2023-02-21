let previousNumber = null;
let currentNumber = 0;
let actionNumber
let lastOperation;
let equalsLast = false;
let numberTyped = true;
let dotcounter = 0;
let withDot = false;

const numberP = document.querySelector(".numberP");
const topScreen = document.querySelector(".top");
const topOperation = document.querySelector(".topOperation");
const dotP = document.querySelector(".dotP");



const numberKeys = document.querySelectorAll(".num");
numberKeys.forEach((key) =>{
    key.addEventListener("click", (e) =>{
        if(equalsLast) clearCalculator();
        amount = +(e.target.getAttribute("data-key"));
        writeCurrentNumber(amount);
        numberTyped = true;
        equalsLast = false;
    });
});

const operators = document.querySelectorAll(".operator");
operators.forEach((key) => {
    key.addEventListener("click", (e) => {
        operation = e.target.getAttribute("data-key");
        withDot = false;
        dotcounter = 0;
        if(operation === "=") {
            if(previousNumber === null) return;
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
            if(equalsLast){
                setPreviousNumber(currentNumber);
                setCurrentNumber(0);
            }
            addOperationToScreen(operation);
            if(!numberTyped || equalsLast) {
                lastOperation = operation;
                equalsLast = false;
                return;
            }
            if(previousNumber === null || equalsLast === true){
                setPreviousNumber(currentNumber);
                setCurrentNumber(0);
            }
            else{
                operated = operate(previousNumber,currentNumber, lastOperation);
                setCurrentNumber(0);
                setPreviousNumber(operated); 
            }
            lastOperation = operation;
            equalsLast = false;

        }
        numberTyped = false;
    });
});


const cKey = document.querySelector(".C");
cKey.addEventListener("click", (e) =>{
    clearCalculator();
});

const plusMinusKey = document.querySelector(".plus-minus");
plusMinusKey.addEventListener("click", (e) =>{
    setCurrentNumber(-currentNumber);
    numberTyped = false;
});

const percentKey = document.querySelector(".percent");
percentKey.addEventListener("click", (e) =>{
    setCurrentNumber(Number((currentNumber/100).toFixed(6)));
    numberTyped = false;
});

const dotKey = document.querySelector(".dot");
dotKey.addEventListener("click", (e) =>{
    if(!withDot && dotcounter === 0){
        dotP.innerText = ".";
        withDot = true;
    }
    numberTyped = false;
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


function clearCalculator(){
    setCurrentNumber(0);
    setPreviousNumber(null);
    addOperationToScreen(null);
    withDot=false;
    dotcounter = 0;
    numberTyped = false;
}

function addOperationToScreen(operaion){
    topOperation.innerText=operaion;
}

function setPreviousNumber(a){
    previousNumber = a;
    showPreviousNumber();
}

function showPreviousNumber(){
    topScreen.innerText = previousNumber;
}


function writeCurrentNumber(a){
    currentNumber = currentNumber * (10 ** (dotcounter + 1)) + a;
    if(withDot){
        dotP.innerText = "";
        dotcounter++;
        currentNumber /= (10 ** dotcounter);
    }
    console.log(dotcounter);
    showCurrentNumber();
}

function setCurrentNumber(a){
    currentNumber = a;
    showCurrentNumber();
}

function showCurrentNumber(){
    numberP.innerText = currentNumber;
}

function add(a,b){
    return Number((a+b).toFixed(6));
}

function multiply(a,b){
    return Number((a*b).toFixed(6));
}

function divide(a, b){
   // return (a/b);
    return Number((a/b).toFixed(6));
}

function subtract(a,b){
    return Number((a-b).toFixed(6));
}

function reverse(a){
    return Number((-a).toFixed(6));
}

function percent(a){
    return Number((a/100).toFixed(6));
}