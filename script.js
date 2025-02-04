const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value ="";
}

// Remove the last character
function backSpace() {
    display.value = display.value.slice(0, -1);
}

function square() {
    try {
        display.value = Math.pow(parseFloat(display.value), 2);
    } catch (error) {
        display.value = "Error";
    }
}
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}