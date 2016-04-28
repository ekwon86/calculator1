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
//LF START

//The function below performs the following: 
//1. Grabs the content of the button and assigns it to variable 'var'.
//2. Adds the value of the number clicked to index[0] of num_array
//3. Displays said number in the display area 
//4. I also inserted a console.log in there so I knew the numbers were being allocated to the correct array.
function process_number_click(the_button){
    var val = $(the_button).text();
    num_array[index] += val;
    $('.display').html(num_array[index]);
    console.log(num_array);
}

//The function below performs the following: 
//1. Grabs the content of the button and assigns it to variable 'var'.
//2. Adds a decimal to the current index/number of num_array.
//3. Displays the decimal on above number.
function process_decimal_click(the_button){
    var val = $(the_button).text();
    num_array[index] += val;
    $('.display').html(num_array[index]);
}

//The function below performs the following: 
//1. Grabs the content of the button and assigns it to variable 'var'.
//2. Increases the index of num_array to index [1]. 
//3. Displays the operator pushed in the display area.
function process_operator_click(the_button){
    var val = $(the_button).text();
    operator = val;
    index++;
    $('.display').html(val);
}

//The function below performs the following: 
//1. Grabs the content of the button and assigns it to variable 'var'.
//2. Assign the variable answer to 0.  
//3. The switch statement looks through the cases listed below and looks for the operator that was entered. 
//4. The code block for the corresponding case statement is executed. 
//5. Displays the result to the display area.
//6. I have also included a console log at the bottom because I wanted to see my code being executed. 
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

//The function below performs the following: 
//1. Grabs the content of the button and assigns it to variable 'var'.
//2. Reset num_array to empty.
//3. Reset the operator to empty.
//4. Reset the index of num_array to 0.
//5. Remove the contents of the display.
//6. I added a console log here to verify that the array and operator values were empty once the button was clicked.
function process_allclear_click(the_button){
    var val = $(the_button).text();
    num_array = [' ', ' '];
    operator = ' ';
    index = 0;
    $('.display').html(" ");
    console.log(num_array, operator);
}

//The function below is not functioning correctly. I am trying to find a way to clear the contents of the 
//current index without erasing the contents of the entire array.
function process_clear_click(the_button){
    var val = $(the_button).text();
    $(num_array[index]).val(" ");
    $('.display').html(" ");
    console.log('clear');
}

//LF END

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
