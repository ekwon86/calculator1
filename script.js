// Created by gkwon on 4/25/16.

/*----------------------  GLOBAL VARIABLES ----------------------*/
var num_array = [''];
var operator = '';
var index = 0;


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
    // for (var i=0; i=num_array[index].length; i++) {
    

}

function process_operator_click(the_button) {
    //check if there is a value in index[1] of num_array. if there is one, and the user
    //types in an additional variable, the below if statement will run the calculation
    //function and return the calculated value to the index[0].
    if (typeof num_array[1] == 'string') {
        evaluate_array();
    }
    // TODO: If the user presses multiple operators,
    //TODO: Only factor in the last one they entered.
    var val = $(the_button).text();
    operator = val;
    $('.display').html(val);
    index++;
    num_array[index] = '';
}

function process_equals_click(the_button){
    var val = $(the_button).text();
    var answer = 0;
    answer = evaluate_array();
    console.log('Equal sign has been pressed and the answer is ' + answer);
    $('.display').html(answer);
    // TODO: If the user presses equal again
    // TODO: Recall what operator was used and recall calculation
    //  TODO: remember index[1] , remember the total, and remember operator
    // if () {
    //     evaluate_array();
    // }
    
}

function evaluate_array() {
    var result=null;
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
    num_array=[result];
    index=0;
    return result;
}

function process_clear_entry_click(the_button){
    var val = $(the_button).text();
    num_array[index] = '';
    $('.display').html(" ");
    console.log(num_array, operator);
}

function process_clear_click(the_button){
    var val = $(the_button).text();
    num_array = [''];
    operator = '';
    index = 0;
    $('.display').html("");
    console.log(num_array, operator);
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
    $('button.clear-entry').click(function() {
        process_clear_entry_click(this);
    });

    //click handler for clear
    $('button.clear').click(function() {
        process_clear_click(this);
    });
});

