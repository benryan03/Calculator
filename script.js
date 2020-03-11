var number_1 = null;
var number_2 = null;
var result = null;
var add_status = false;
var subtract_status = false;
var multiply_status = false;
var divide_status = false;
var result_clicked = true;
var display_text = "";
var period = ".";

function test_multiple_decimals(num, x){
    if (String(eval("number_"+(x))).includes(".") == true && num == "."){
        console.log("skip input");
        return "";
    }
    else {
        console.log("allow input");
        return num;
    }
}

function number_clicked(num){
    if (number_1 == null && number_2 == null){
        num = test_multiple_decimals(num, 1);
        number_1 = num;
        display_text = num;
        document.getElementById("display").innerHTML = display_text;
    }
    else if (number_1 != null && number_2 == null){
        if (add_status == false && subtract_status == false && multiply_status == false && divide_status == false){
            if (result_clicked == true){
                clear_data();
                num = test_multiple_decimals(num, 1);
                number_1 = num;
                display_text = num;
                document.getElementById("display").innerHTML = display_text;
            }
            else{
                num = test_multiple_decimals(num, 1);
                number_1 = "" + number_1 + num;
                display_text = "" + display_text + num;
                document.getElementById("display").innerHTML = display_text;
            }
        }
        else{
            num = test_multiple_decimals(num, 2);
            number_2 = num;
            display_text = display_text + num;
            document.getElementById("display").innerHTML = display_text;
            }
        }   
    else if (number_2 != null){
        num = test_multiple_decimals(num, 2);
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
    //these variables are set in case after "=" is clicked, an operation is clicked before "C" is clicked
    number_1 = result;
    number_2 = null;
    add_status = false;
    subtract_status = false;
    multiply_status = false;
    divide_status = false;

    //this variable is set in case after "=" is clicked, a number is clicked before "C is clicked"
    result_clicked = true
}

function clear_data(){
    number_1 = null;
    number_2 = null;
    add_status = false;
    subtract_status = false;
    multiply_status = false;
    divide_status = false;
    result_clicked = false;
    display_text = ""
    document.getElementById("display").innerHTML = "0";
}