/**
 * Created by gkwon on 4/25/16.
 */


// var display = $('.display');
// var input1 = '';
//
// $('.keys').click(function(){
//     input1 += $(this).html();
//     display.html(input1);
//     console.log(input1);
// });

//callback function
function callback(type, value, item) {
    switch (value) {
        case undefined:
            $('.display').html(" ");
            break;
        default:
            $('.display').html(value);
            break;
    }
}
//my_calculator - creates a new calculator object 
var my_calculator = new calculator(callback);
//after DOM load add click handlers to all buttons
$(document).ready(function() {
   $('button').on('click', function() {
       var val = $(this).text();
       console.log("btn clicked : ", val);
       switch (val) {
           case 'AC':
               my_calculator.allClear();
               break;
           default: 
               my_calculator.addItem($(this).text());
               break;
       }
   }) 
});