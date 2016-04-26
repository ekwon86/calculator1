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