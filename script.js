
// function process_decimal_click(the_button){
//     var val = $(the_button).text();
//     num_array[index] += val;
//     $('.display').html(num_array[index]);
//     //TODO: If the user presses multiple decimal,
//         //TODO: Only factor in one decimal.
//     // for (var i=0; i=num_array[index].length; i++) {
//     //
//     // }
//
// }
//

//
// function equals(){
//     var answer = 0;
//     answer = evaluate_array();
//     console.log('Equal sign has been pressed and the answer is ' + answer);
//     $('.display').html(answer);
//     // TODO: If the user presses equal again
//         // TODO: Recall what operator was used and recall calculation
//        //  TODO: remember index[1] , remember the total, and remember operator
// }
//
// function evaluate_array() {
//     var result=null;
//     if (operator == "+") {
//         result = parseFloat(num_array[0]) + parseFloat(num_array[1]);
//     } else if (operator == "-") {
//         result = parseFloat(num_array[0]) - parseFloat(num_array[1]);
//     } else if (operator == "x") {
//         result =  parseFloat(num_array[0]) * parseFloat(num_array[1]);
//     } else if (operator == '÷') {
//         if (num_array[1] == "0") {
//             $('.display').html('Error');
//             return;
//         } else {
//             result = parseFloat(num_array[0]) / parseFloat(num_array[1]);
//         }
//     }
//     num_array=[result];
//     index=0;
//     return result;
// }
//





function calc_constructor() {
    var num_array = [''];
    var operator = '';
    var index = 0;

    /********************** BUTTON PRESSED **********************/
    this.button_pressed = function (val) {
        switch (val) {
            case '+':
            case '-':
            case 'x':
            case '÷':
                operator_clicked();
                break;
            case '.':
                decimal_clicked();
                break;
            case '=':
                evaluate_array();
                break;
            case 'CE':
                clear_entry();
                break;
            case 'C':
                clear();
                break;
            //NUMBER CLICKED
            default:
                number_clicked();
                break;
        }
    };

    /********************** NUMBER CLICKED **********************/    
    function number_clicked(val){
        num_array[index] += val;
        $('.display').html(num_array[index]);
        console.log(num_array);
    }
    
    /********************** DECIMAL CLICKED **********************/
    function decimal_clicked(val){

    }
    
    /********************** OPERATOR CLICKED **********************/
    function operator_clicked(val) {
        console.log('An operator has been clicked' + val);
        if (typeof num_array[1] == 'string') {
            evaluate_array();
        }
        $('.display').html(val);
        this.index++;
        this.num_array[this.index] = ''
    }
    
    /********************** CALCULATE **********************/
    function evaluate_array() {

    }
    
    /********************** CLEAR ENTRY **********************/
    function clear_entry(val){
        console.log('Clear entry has been clicked' + val);
        this.num_array[this.index] = '';
        $('.display').html(" ");
        console.log(this.num_array, this.operator);
    }
    
    /********************** CLEAR ALL **********************/
    function clear(val){
        console.log('Clear has been clicked' + val);
        this.num_array = [''];
        this.operator = '';
        this.index = 0;
        $('.display').html("");
        console.log(this.num_array, this.operator);
    }
}


/*--------------------- CLICK HANDLERS -----------------------*/
$(document).ready(function() {
    //New calculator instantiation
    var calc = new calc_constructor();

    $('button').click(function() {
        calc.button_pressed($(this).text());
    })
});

