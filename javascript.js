let savedNumber = 0;

function operate(a,b, operation){
    let result = null;
    if(operation === "+"){
        result = add(a,b);
    }
    if(operation === "-"){
        result = subtract(a,b);
    }
    if(operation === "*"){
        result = multiply(a,b);
    }
    if(operation === "/"){
        // CASE OF DIVIDING BY 0 ------------------------------
        if(b === 0){}

        result = divide(a,b);
    }

    savedNumber = result;
    return result;
}

console.log("AAA");

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