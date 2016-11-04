//connects the variables in HTML to the variables in JavaScript
var firstNumber = document.getElementById("input1");
var operation = document.getElementById("operation");
var secondNumber = document.getElementById("input2");
var calculatorbutton = document.getElementById("calculatorbutton");



function calculate() {
    
    var num1 = firstNumber.value;
    var num2 = secondNumber.value;
    var answer = document.getElementById("answer");
    /*
    answer.innerHTML = num1;*/
    /*
        answer.style.backgroundColor = "red"*/

    if (operation.value === "+") {
        if (num1 == "2" && num2 == "2") {
        answer.innerHTML = "Fish"
        }
        
        else if (num1 == "1234567890" && num2 == "1234567890") {
        answer.innerHTML = "I'm too lazy"
        }
        
        else {
        answer.innerHTML = Number(num1) + Number(num2);
        }
    }

    else if (operation.value === "-") {
        if (num1 == "1" && num2 == "1") {
            answer.innerHTML = "You should already know this, you dummy"
        }
        
        else {
        answer.innerHTML = Number(num1) - Number(num2);
        }
    }
    else if (operation.value === "/") {
        answer.innerHTML = Number(num1) / Number(num2);
    }
    else if (operation.value === "*") {
        answer.innerHTML = Number(num1) * Number(num2);
    }
    else if (operation.value === "%") {
        answer.innerHTML = Number(num1) % Number(num2);
    }
    else if (operation.value === "==") {
        if (num1 === num2) {
            answer.innerHTML = "true";
        }
        else {
            answer.innerHTML = "false";
        }

    }
}


calculatorbutton.addEventListener("click", calculate);
