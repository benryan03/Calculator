var number_1 = null;
var number_2 = null;
var result = null;
var add_status = false;
var subtract_status = false;
var multiply_status = false;
var divide_status = false;
var display_text = "";
var period = ".";

function number_clicked(num){
    if (number_1 == null && number_2 == null){
        number_1 = num;
        display_text = num;
        document.getElementById("display").innerHTML = display_text;
    }
    else if (number_1 != null && number_2 == null){
        if (add_status == false && subtract_status == false && multiply_status == false && divide_status == false){
            number_1 = "" + number_1 + num;
            display_text = "" + display_text + num;
            document.getElementById("display").innerHTML = display_text;
        }
        else{
            number_2 = num;
            display_text = display_text + num;
            document.getElementById("display").innerHTML = display_text;
            }
        }   
    else if (number_2 != null){
        number_2 = "" + number_2 + num;
        display_text = display_text + num;
        document.getElementById("display").innerHTML = display_text;
    }
}

function add(){
    add_status = true;
    display_text = display_text + "+";
    document.getElementById("display").innerHTML = display_text;
}

function subtract(){
    subtract_status = true;
    display_text = display_text + "-";
    document.getElementById("display").innerHTML = display_text;
}

function multiply(){
    multiply_status = true;
    display_text = display_text + "*";
    document.getElementById("display").innerHTML = display_text;
}

function divide(){
    divide_status = true;
    display_text = display_text + "/";
    document.getElementById("display").innerHTML = display_text;
}

function calculate_result(){
    if (add_status == true){
        result = Number(number_1) + Number(number_2);
        number_1 = Number(display_text);
        document.getElementById("display").innerHTML = result;
    }
    else if (subtract_status == true){
        result = Number(number_1) - Number(number_2);
        number_1 = Number(display_text);
        document.getElementById("display").innerHTML = result;
    }
    if (multiply_status == true){
        result = Number(number_1) * Number(number_2);
        number_1 = Number(display_text);
        document.getElementById("display").innerHTML = result;
    }
    if (divide_status == true){
        result = Number(number_1) / Number(number_2);
        number_1 = Number(display_text);
        document.getElementById("display").innerHTML = result;
    }
}

function clear_data(){
    number_1 = null;
    number_2 = null;
    add_status = false;
    subtract_status = false;
    multiply_status = false;
    divide_status = false;
    display_text = ""
    document.getElementById("display").innerHTML = "0";
}