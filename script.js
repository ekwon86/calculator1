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

   
    $('button').on('click', function() {
       var val = $(this).text();
       console.log("btn clicked : ", val);
       switch (val) {
           case '+':

               
               break;
           case '-':

              
               break;
           case '÷':

              
               break;
           case 'x':

               
               break;
           case 'AC':

               break;
           case 'C':

               break;
           default:
               break;
       }
   })
});

// if number is pressed add to current position




/*-------------------- V1.0 --------------------*/
//add values from buttons clicked into plain object that has the following properties
    //type - equal to one of these types "number", "operator", "equalSign"
    //value - equal to the value of the button
//add object into a global array variable
//process calculation based on objects in array


