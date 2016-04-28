// Created by gkwon on 4/25/16.


//global variables
var num_array = [' ', ' '];
var operator = ' ';
var index = 0;

$(document).ready(function() {
    //set initial display to '0'
    $('.display').html("0")
    // i can click zero numerous times. figure out a way to prevent 0 from logging more than once if value is 0.

    //click handler for buttons
    $('button').on('click', function() {
        var val = $(this).text();
        console.log("btn click: ", val);
        //numbers
        if ($(this).hasClass('numbers')) {
            num_array[index] += val;
            $('.display').html(num_array[index]);
            console.log(num_array);
        }
        //decimal
        else if ($(this).hasClass('decimal')) {
            num_array[index] += val;
            $('.display').html(num_array[index]);
        }
        //operators
        else if ($(this).hasClass('operators')) {
            operator = val;
            index++;
            $('.display').html(val);
        }



        else if ($(this).hasClass('equals')) {
            var answer = 0;
                switch (operator) {
                    case '+':
                        //use parseFloat to parse numbers in case of decimals.
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
                    case '=':
                        break;
                    default:
                        break;
                } $('.display').html(answer);
        }
        //all clear 
        else if ($(this).hasClass('all-clear')) {

        }
        /clear
        else if ($(this).hasClass('clear')) {

        }
    })
});




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
