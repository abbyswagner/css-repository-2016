// Create variables
var input1 = document.getElementById("input");
var select = document.getElementById("select");
var button = document.getElementById("button");
var monday = document.getElementById("mondaydiv");
var tuesday = document.getElementById("tuesdaydiv");
var wednesday = document.getElementById("wednesdaydiv");
var thursday = document.getElementById("thursdaydiv");
var friday = document.getElementById("fridaydiv");
var selectday = document.getElementById("selectday");
var whatday = document.getElementById("checkoff");
var all = document.getElementById("all");

// defines what the computer should do when you click the first button to add events
button.addEventListener("click", function (action) {
    var task = "<p>" + input1.value + "<p>" + "<br>";

    //tells computer to put data inputed under the Monday div section when the person selects the event to be on Monday
    if (select.value == "monday") {
    monday.innerHTML += input1.innerHTML + task;
    }
    //tells computer to put data with the Tuesday select under the Tuesday div
    else if (select.value == "tuesday") {
        tuesday.innerHTML += input1.innerHTML + task;
    }
    
    //tells computer to put information inputed with a Wednesday select under according div
    
    else if (select.value == "wednesday") {
        wednesday.innerHTML += input1.innerHTML + task;
    }
    
    //tells computer to put information from the input under the Thursday div when the user selects the Thursday option
    else if (select.value == "thursday") {
        thursday.innerHTML += input1.innerHTML + task;
    }
    //puts inputed info under Friday div when it has a Friday select option
    else if (select.value == "friday") {
        friday.innerHTML += input1.innerHTML + task;
    }
 
});
// tells computer what to do when user selects the current date
 whatday.addEventListener("click", function (action2) {
     //says when user selects that is it Monday, it turns the information in Monday pink; also makes sure events after Monday are the normal colour and design
    if (selectday.value == "monday") {
        monday.style.color = "fuchsia", tuesday.style.color = "black", wednesday.style.color = "black", thursday.style.color = "black", friday.style.color = "black", tuesday.style.textDecoration = "none", wednesday.style.textDecoration = "none", thursday.style.textDecoration = "none", friday.style.textDecoration = "none", monday.style.textDecoration = "none";
    }//tells computer to turn Tuesday info to pink, and crosses out all previous day's information while keeping future info the normal colour and design
    else if (selectday.value == "tuesday") {
        tuesday.style.color = "fuchsia", monday.style.textDecoration = "line-through", monday.style.color = "black", wednesday.style.color = "black", thursday.style.color = "black", friday.style.color = "black", wednesday.style.textDecoration = "none", thursday.style.textDecoration = "none", friday.style.textDecoration = "none", tuesday.style.textDecoration = "none";
        //similar to previous days, turns Wednesday info pink, crosses out all info from the previous days, and keeps future info normal
    }
    else if (selectday.value == "wednesday") {
        wednesday.style.color = "fuchsia", monday.style.textDecoration = "line-through", tuesday.style.textDecoration = "line-through",  tuesday.style.color = "black", thursday.style.color = "black", friday.style.color = "black", thursday.style.textDecoration = "none", friday.style.textDecoration = "none", wednesday.style.textDecoration = "none";
        //more of previous
    }
    else if (selectday.value == "thursday") {
        thursday.style.color = "fuchsia", monday.style.textDecoration = "line-through", tuesday.style.textDecoration = "line-through", wednesday.style.textDecoration = "line-through", monday.style.color = "black", tuesday.style.color = "black", wednesday.style.color = "black", friday.style.color = "black", friday.style.textDecoration = "none", thursday.style.textDecoration = "none";
        //same as the earlier functions
    }
    else if (selectday.value == "friday") {
        friday.style.color = "fuchsia",  monday.style.textDecoration = "line-through",  tuesday.style.textDecoration = "line-through",  wednesday.style.textDecoration = "line-through",  thursday.style.textDecoration = "line-through", monday.style.color = "black", tuesday.style.color = "black", wednesday.style.color = "black", thursday.style.color = "black";
        
    }
}); 
//tells computer when any string is clicked, the string should get a line through it
all.addEventListener("click", function (evt) {
    var targettext=evt.target;
    targettext.style.textDecoration = "line-through";
    
});

