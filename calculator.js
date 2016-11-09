//connects the variables in HTML to the variables in JavaScript
var firstNumber = document.getElementById("input1");
var operation = document.getElementById("operation");
var secondNumber = document.getElementById("input2");
var calculatorbutton = document.getElementById("calculatorbutton");


//the following is what things will happen when the calculator button is pressed (the computer will add, subract, divide, etc when the according operation is chosen)
function calculate() {
    // I am creating more variables that are connected to the value as well
    var num1 = firstNumber.value;
    var num2 = secondNumber.value;
    var answer = document.getElementById("answer");
    /*
    answer.innerHTML = num1;*/
    /*
        answer.style.backgroundColor = "red"*/
        
// if statement for when the operation is addition
    if (operation.value === "+") {
        if (num1 == "2" && num2 == "2") {
        answer.innerHTML = "Fish"
        }
        
        else if (num1 == "1234567890" && num2 == "1234567890") {
        answer.innerHTML = "I'm too lazy";
        }
        
        else {
        answer.innerHTML = Number(num1) + Number(num2);
        }
    }
//if statement when operation is subtraction
    else if (operation.value === "-") {
        if (num1 == "1" && num2 == "1") {
            answer.innerHTML = "You should already know this, you dummy";
        }
        
        else {
        answer.innerHTML = Number(num1) - Number(num2);
        }
    }
    //if statement when operation is division
    else if (operation.value === "/") {
        answer.innerHTML = Number(num1) / Number(num2);
    }
    
    //if statement when operation is multiplication
    else if (operation.value === "*") {
        answer.innerHTML = Number(num1) * Number(num2);
    }
    
    //if statement when operation pertains to remainder
    else if (operation.value === "%") {
        answer.innerHTML = Number(num1) % Number(num2);
    }
    
    //if statement when operation is whether they are equal or not
    else if (operation.value === "==") {
        if (num1 === num2) {
            answer.innerHTML = "true";
        }
        else {  
            answer.innerHTML = "false";
        }

    }
}

//says the function will run when you click the calculator button; the events and operations listed above are within the "calculate" function, and this says when you click the button, these operations will run
calculatorbutton.addEventListener("click", calculate);
