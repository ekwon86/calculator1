// Created by gkwon on 4/25/16.


/*----------------------  GLOBAL VARIABLES ----------------------*/
var num_array = [' ', ' '];
var operator = ' ';
var num_array2 = [' ', ' '];
var operator2 = ' ';
var index = 0;


/*--------------------------  FUNCTIONS --------------------------*/
function process_number_click(the_button){
    var val = $(the_button).text();
    num_array[index] += val;
    $('.display').html(num_array[index]);
    console.log(num_array);
    //TODO: figure out how to check if operator has value inside
    // if (num_array.length ==2 || operator ) {
    //     num_array2[index] += val;
    //     $('.display').html(num_array[index]);
    //     console.log(num_array2);
    // } else if (num_array2.length == 2) {
    //     num_array = [];
    // }
}

function process_decimal_click(the_button){
    var val = $(the_button).text();
    num_array[index] += val;
    $('.display').html(num_array[index]);

}

function process_operator_click(the_button) {
    var val = $(the_button).text();
    operator = val;
    $('.display').html(val);

    //increase index of num_array by 1 if the index[1] is empty.
    if (num_array[1] == ' ') {
        index++;
    }
    // function evaluate_current_array() {
    //     var answer = 0;
    //     if (operator == "+") {
    //         answer = parseFloat(num_array[0]) + parseFloat(num_array[1]);
    //     } else if (operator == "-") {
    //         answer = parseFloat(num_array[0]) - parseFloat(num_array[1]);
    //     } else if (operator == "x") {
    //         answer = parseFloat(num_array[0]) * parseFloat(num_array[1]);
    //     } else if (operator == '÷') {
    //         answer = parseFloat(num_array[0]) / parseFloat(num_array[1]);
    //     }
    // }
    else if  (operator != ' ' && num_array[1] != ' ') {
        var val = $(the_button).text();
        operator = ' ';
        operator2 = val;
        var answer = 0;


            evaluate_current_array();
            console.log('result of evaluate_current_array is ' + evaluate_current_array());
            num_array2.push(answer);
            console.log(num_array2);
        }

}

function process_equals_click(the_button){
    var val = $(the_button).text();
    var answer = 0;
    switch (operator) {
        case '+':
            answer = parseFloat(num_array[0]) + parseFloat(num_array[1]);
            break;
        case '-':
            answer = parseFloat(num_array[0]) - parseFloat(num_array[1]);
            break;
        case '÷':
            answer = parseFloat(num_array[0]) / parseFloat(num_array[1]);
            break;
        case 'x':
            answer = parseFloat(num_array[0]) * parseFloat(num_array[1]);
            break;
        default:
    }
    $('.display').html(answer);
    console.log('the answer is: ' + answer);
}

function process_allclear_click(the_button){
    var val = $(the_button).text();
    num_array = [' ', ' '];
    operator = ' ';
    index = 0;
    $('.display').html(" ");
    console.log(num_array, operator);
}

function process_clear_click(the_button){
    var val = $(the_button).text();
    $(num_array[index]).val(" ");
    $('.display').html(" ");
    console.log('clear');
}


/*--------------------- CLICK HANDLERS -----------------------*/
$(document).ready(function() {
    //click handler for numbers
    $('button.numbers').click(function(){
        process_number_click(this);
    });

    // click handler for decimal
    $('button.decimal').click(function() {
        process_decimal_click(this);
    });

    //click handler for operators
    $('button.operators').click(function() {
        process_operator_click(this);
    });

    //click handler for equals
    $('button.equals').click(function() {
        process_equals_click(this);
    });

    //click handler for all-clear
    $('button.all-clear').click(function() {
        process_allclear_click(this);
    });

    //click handler for clear
    $('button.clear').click(function() {
        process_clear_click(this);
    });


});


/*-------------------- V1.0 --------------------*/
//add values from buttons clicked into plain object that has the following properties
    //type - equal to one of these types "number", "operator", "equalSign"
    //value - equal to the value of the button
//add object into a global array variable
//process calculation based on objects in array
