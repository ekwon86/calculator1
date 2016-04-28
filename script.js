// Created by gkwon on 4/25/16.


//global variables
var num_array = [' ', ' '];
var operator = ' ';
var index = 0;

$(document).ready(function() {
    //clear function
    function clear() {
        $('.display').html("0");
    }
    //set initial display to '0'
    // i can click zero numerous times. figure out a way to prevent 0 from logging more than once if value is 0.
    clear();

    //click handler for buttons
    $('button').on('click', function() {
        var val = $(this).text();
        console.log("btn click: ", val);

        if ($(this).hasClass('numbers')) {
            num_array[index] += val;
            $('.display').html(val);
            // $('.display').html(num_array.join(''));
            console.log(num_array);
        } // calculator won't spit out more numbers after first number but shows up
          // figured out to show multiple numbers but after operator index[0] number pops up

        else if ($(this).hasClass('operators')) {
            operator = val;
            index++;
            $('.display').html(val);

        } else if ($(this).hasClass('all-clear')) { 
            clear();
        } else if ($(this).hasClass('clear')) {
            clear();
        } else if ($(this).hasClass('equals')) {
            var answer = 0;
                switch (operator) {
                    case '+':
                        //example if i add 1 + 1 returns 1 1 not 2 because of concatentation
                        answer = num_array[0] + num_array[1];
                        break;
                    case '-':
                        answer = num_array[0] - num_array[1];
                        break;
                    case '÷':
                        answer = num_array[0] / num_array[1];
                        break;
                    case 'x':
                        answer = num_array[0] * num_array[1];
                        break;
                    case 'AC':
                        break;
                    case 'C':
                        clear();
                        break;
                    default:
                        break;
                } $('.display').html(answer);
        }
    })
});


// if number is pressed add to current position

// if $(this).hasClass('operator')


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
