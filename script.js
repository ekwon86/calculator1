// Created by gkwon on 4/25/16.

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

//global variables
var num_array = [' ', ' '];
var operator = ' ';
var index = 0;

$(document).ready(function() {
    //click handler for buttons
    $('button').on('click', function() {
        var val = $(this).text();
        console.log("btn click: ", val);

        if ($(this).hasClass('numbers')) {
            num_array[index] += val;
            $('.display').html(val);
            console.log(num_array);
        }
        else if ($(this).hasClass('operators')) {
            console.log('test');
            operator = val;
            index++;
            $('.display').html(val);
            // $('.display').empty();

        } else if ($(this).hasClass('equals')) {
            var answer = 0;
                switch (val) {
                    case '+':
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
                        break;
                    default:
                        break;
                } $('.display')
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


