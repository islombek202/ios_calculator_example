let display = document.getElementById("display");

function add(value){
    display.value += value;
}

function calculate(){

    try{
        display.value = eval(display.value);
    }

    catch{
        display.value = "Error";
    }
}

function clearDisplay(){
    display.value = "";
}
function toggleSign(){

    if(display.value.startsWith('-')){
        display.value =
            display.value.slice(1);
    }

    else{
        display.value =
            '-' + display.value;
    }
}