

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



function calc_constructor() {
    var self = this;
    self.num_array = [""];
    self.operator = '';
    self.index = 0;
    self.result = null;

    /********************** BUTTON PRESSED **********************/
    self.button_pressed = function (val) {
        switch (val) {
            case '+':
            case '-':
            case 'x':
            case '÷':
                self.operator_clicked(val);
                break;
            case '.':
                self.decimal_clicked(val);
                break;
            case '=':
                self.evaluate_array(val);
                break;
            case 'CE':
                self.clear_entry(val);
                break;
            case 'C':
                self.clear(val);
                break;
            default:
                self.number_clicked(val);
                break;
        }
    };

    /************************ DISPLAY *************************/
    self.display = function(val){
        $('.display').html(val);
    };
    /********************** NUMBER CLICKED **********************/    
    self.number_clicked = function(num) {
        // console.log('number has been clicked',num);
        self.num_array[self.index] += num;
        console.log('num_array:',self.num_array);
        self.display(self.num_array[self.index]);
    };
    
    /********************** DECIMAL CLICKED **********************/
    self.decimal_clicked = function(val){
        console.log('decimal has been clicked',val);
        self.num_array[self.index] += val;
        self.display(self.num_array[self.index]);
    };
    
    /********************** OPERATOR CLICKED **********************/
    self.operator_clicked = function(val){
        self.operator = val;
        console.log('operator has been clicked', self.operator);
        if (typeof self.num_array[1] == 'string'){
            self.evaluate_array();
        }
        self.index++;
        self.num_array[self.index] = '';
        self.display(val);
    };
    
    /********************** CALCULATE **********************/
    self.evaluate_array = function() {
        console.log("num_array is currently", self.num_array, "operator is currently", self.operator);
        if (self.operator == "+"){
            self.result = parseFloat(self.num_array[0]) + parseFloat(self.num_array[1]);
        }
        else if (self.operator == "-"){
            self.result = parseFloat(self.num_array[0]) - parseFloat(self.num_array[1]);
        }
        else if (self.operator == "x"){
            self.result = parseFloat(self.num_array[0]) * parseFloat(self.num_array[1]);
        }
        else if (self.operator == '÷'){
            if (self.num_array[1] == "0"){
                $('.display').html('Error');
            }
            else {
                self.result = parseFloat(self.num_array[0]) / parseFloat(self.num_array[1]);
            }
        }
        self.num_array=[self.result];
        self.index = 0;
        $('.display').html(self.result);
        return self.result;
    };

    /********************** CLEAR ENTRY **********************/
    function clear_entry(val){
        console.log('Clear entry has been clicked' + val);
        num_array[index] = '';
        $('.display').html(" ");
        console.log(num_array, operator);
    }
    
    /********************** CLEAR ALL **********************/
    function clear(val){
        console.log('Clear has been clicked' + val);
        num_array = [''];
        operator = '';
        index = 0;
        $('.display').html("");
        console.log(num_array, operator);
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

