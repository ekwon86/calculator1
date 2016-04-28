// Created by gkwon on 4/25/16.


//global variables
var num_array = [' ', ' '];
var operator = ' ';
var index = 0;

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

/*-------------------------- CALCULATOR FUNCTIONS --------------------------*/
function process_number_click(the_button){
    var val = $(the_button).text();
    num_array[index] += val;
    $('.display').html(num_array[index]);
    console.log(num_array);
}
function process_decimal_click(the_button){
    var val = $(the_button).text();
    num_array[index] += val;
    $('.display').html(num_array[index]);
}
function process_operator_click(the_button){
    var val = $(the_button).text();
    operator = val;
    index++;
    $('.display').html(val);
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
            break;
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
// //click handler for buttons
// $('button').on('click', function() {
//     var val = $(this).text();
//
//     //numbers TODO:  this should go into a click handler for button with a class of number
//     if ($(this).hasClass('numbers')) {
//         // process_number_click();
//     }
//     //decimal TODO: ths should go into a click handler for a button with a class of decimal
//     else if ($(this).hasClass('decimal')) {
//         // process_decimal_click();
//     }
//     //operators
//     else if ($(this).hasClass('operators')) {
//         // process_operator_click();
//     }
//     //all clear
//     else if ($(this).hasClass('all-clear')) {
//         num_array = [' ', ' '];
//         operator = ' ';
//         index = 0;
//         $('.display').html(" ");
//         console.log(num_array, operator);
//     }
//     //clear content in current array
//     else if ($(this).hasClass('clear')) {
//         $(num_array[index]).val(" ");
//         $('.display').html(" ");
//     }
//equals
// else if ($(this).hasClass('equals')) {
//     var answer = 0;
//         switch (operator) {
//             case '+':
//                 //use parseFloat to parse numbers in case of decimals.
//                 answer = parseFloat(num_array[0]) + parseFloat(num_array[1]);
//                 break;
//             case '-':
//                 answer = parseFloat(num_array[0]) - parseFloat(num_array[1]);
//                 break;
//             case '÷':
//                 //display set to error if you divide by 0.
//                 if (num_array[1] == 0) {
//                     $('.display').html('error');
//                 }
//                 else {
//                     answer = parseFloat(num_array[0]) / parseFloat(num_array[1]);
//                 }
//                 break;
//             case 'x':
//                 answer = parseFloat(num_array[0]) * parseFloat(num_array[1]);
//                 break;
//             case '=':
//                 // what happens when you press equals again?
//                 // figure out how to recall operator used from previous
//                     if (operator == '+') {
//                         answer = answer + parseFloat(num_array[0]) + parseFloat(num_array[1]);
//                     }
//                 break;
//             default:
//
//                 break;
//         }
//     $('.display').html(answer);
//     console.log('the answer is: ' + answer);
// }
//     })
// });




/*-------------------- V1.0 --------------------*/
//add values from buttons clicked into plain object that has the following properties
    //type - equal to one of these types "number", "operator", "equalSign"
    //value - equal to the value of the button
//add object into a global array variable
//process calculation based on objects in array


//callback function
// function callback(type, value, item) {
//     switch (value) {
//         case undefined:
//             $('.display').html(" ");
//             break;
//         default:
//             $('.display').html(value);
//             break;
//     }
// }
//my_calculator - creates a new calculator object
// var my_calculator = new calculator(callback);
//after DOM load add click handlers to all buttons
