var number_1 = null;
var number_2 = null;
var result = null;
var add_status = false;
var subtract_status = false;
var multiply_status = false;
var divide_status = false;

function number_clicked(num){
    if (number_1 == null && number_2 == null){ //if both numbers NULL
        number_1 = num;
        console.log("button clicked: " + num);
        document.getElementById("display").innerHTML = number_1;
    }
    else if (number_1 != null && number_2 == null){ //if 1 NOT null and 2 is NULL
        if (add_status == false && subtract_status == false && multiply_status == false && divide_status == false){ //if operation has not yet been clicked
            number_1 = "" + number_1 + num;
            console.log("button clicked: " + num);
            document.getElementById("display").innerHTML = number_1;
        }
        else{ // if operation has been clicked
            number_2 = num;
            console.log("button clicked: " + num);
            document.getElementById("display").innerHTML = number_2;
            }
        }   
    else if (number_2 != null){
        number_2 = "" + number_2 + num;
        console.log("button clicked: " + num);
        document.getElementById("display").innerHTML = number_2;
    }
}

function add(){
    console.log("add");
    add_status = true;
}

function calculate_result(){
    console.log("result");
    result = Number(number_1) + Number(number_2);
    document.getElementById("display").innerHTML = result;

}

function clear_data(){
    console.log("cleared");
    number_1 = null;
    number_2 = null;
    document.getElementById("display").innerHTML = "0";
}