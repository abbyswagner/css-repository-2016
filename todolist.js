// Create variables
var input1 = document.getElementById("input");
var select = document.getElementById("select");
var button = document.getElementById("button");
var monday = document.getElementById("mondaydiv");
var tuesday = document.getElementById("tuesdaydiv");
var wednesday = document.getElementById("wednesdaydiv");
var thursday = document.getElementById("thursdaydiv");
var friday = document.getElementById("fridaydiv");

button.addEventListener("click", function (action) {
    var task = "<p>" + input1.value + "<p>" + "<br>";

    
    if (select.value == "monday") {
    monday.innerHTML = input1.innerHTML + task;
    }
    
    else if (select.value == "tuesday") {
        tuesday.innerHTML = input1.innerHTML + task;
    }
    
    
    else if (select.value == "wednesday") {
        wednesday.innerHTML = input1.innerHTML + task;
    }
    
    else if (select.value == "thursday") {
        thursday.innerHTML = input1.innerHTML + task;
    }
    
    else if (select.value == "friday") {
        friday.innerHTML = input1.innerHTML + task;
    }
    
});

