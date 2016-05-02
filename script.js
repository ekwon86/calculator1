// Created by gkwon on 4/25/16.

/*----------------------  GLOBAL VARIABLES ----------------------*/
var num_array = [''];
var operator = [''];
var index = 0;
var temp_num = null;


/*--------------------------  FUNCTIONS --------------------------*/
function process_number_click(the_button) {
    var val = $(the_button).text();
    num_array[index] += val;
    $('.display').html(num_array[index]);
    console.log(num_array);
}

function process_decimal_click(the_button){
    var val = $(the_button).text();
    num_array[index] += val;
    $('.display').html(num_array[index]);
    //TODO: If the user presses multiple decimal,
        //TODO: Only factor in one decimal.
}

function process_operator_click(the_button) {
    var val = $(the_button).text();
    operator = val;
    $('.display').html(val);

    //multiple operators
    if (typeof num_array[1] == 'string') {
        evaluate_array();
    }
    index++;
    num_array[index] = '';

    // TODO: If the user presses multiple operators,
    //TODO: Only factor in the last one they entered.
}

function process_equals_click(the_button){
    var val = $(the_button).text();
    var answer = 0;


    if (typeof num_array[1] == 'undefined') {
        num_array.push(temp_num);
        evaluate_array();
        $('.display').html(num_array[0]);
        console.log('the new answer is ' + num_array[0]);
    }
    //operation rollover
    // else if (typeof num_array[1] == 'number' && typeof operator == 'string') {
    //     num_array.splice(1, 0, num_array[0]);
    //     evaluate_array();
    //     $('.display').html(num_array[0]);
    // }
    // equals
    else {
        answer = evaluate_array();
        $('.display').html(answer);
        console.log('Equal sign has been pressed and the answer is ' + answer);
        console.log('num_array is currently ' + num_array);
    }
}

function evaluate_array() {
    var result= null;
    if (operator == "+") {
        result = parseFloat(num_array[0]) + parseFloat(num_array[1]);
    } else if (operator == "-") {
        result = parseFloat(num_array[0]) - parseFloat(num_array[1]);
    } else if (operator == "x") {
        result =  parseFloat(num_array[0]) * parseFloat(num_array[1]);
    } else if (operator == '÷') {
        if (num_array[1] == "0") {
            $('.display').html('Error');
            return;
        } else {
            result = parseFloat(num_array[0]) / parseFloat(num_array[1]);
        }
    }
    temp_num = num_array[1];
    num_array=[result];
    index=0;
    return result;
}

function process_clear_entry_click(the_button){
    var val = $(the_button).text();
    num_array[index] = '';
    $('.display').html("");
    console.log(num_array, operator);
}

function process_clear_click(the_button){
    var val = $(the_button).text();
    num_array = [''];
    operator = [''];
    index = 0;
    $('.display').html("");
    console.log(num_array, operator);
}

// function process_delete_click(the_button){
//     var val = $(the_button).text();
//     num_array[index] -= val;
// }

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
    $('button.clear-entry').click(function() {
        process_clear_entry_click(this);
    });

    //click handler for clear
    $('button.clear').click(function() {
        process_clear_click(this);
    });

    // //click handler for backspace
    // $('button.delete').click(function() {
    //     process_delete_click(this);
    // });
});

