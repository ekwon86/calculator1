/** CALCULATOR CONSTRUCTOR**/

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
                self.clear_entry();
                break;
            case 'C':
                self.clear();
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
        self.num_array[self.index] += num;
        console.log('num_array:',self.num_array);
        self.display(self.num_array[self.index]);
    };
    
    /********************** DECIMAL CLICKED **********************/
    self.decimal_clicked = function(val){
        if (self.num_array[self.index].indexOf('.') != '-1'){
            return;
        }
        else if (self.num_array[self.index] === ""){
            self.num_array[self.index] += 0;
        }
        self.num_array[self.index] += val;
        self.display(self.num_array[self.index]);
    };

    /********************** OPERATOR CLICKED **********************/
    self.operator_clicked = function(val){
        self.operator = val;
        console.log('operator clicked:', self.operator);
        if (typeof self.num_array[1] == 'string'){
            self.evaluate_array();
        }
        self.index++;
        self.num_array[self.index] = '';
        self.display(val);
    };
    
    /********************** CALCULATE **********************/
    self.evaluate_array = function() {
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
                self.display('Error');
            }
            else {
                self.result = parseFloat(self.num_array[0]) / parseFloat(self.num_array[1]);
            }
        }
        self.num_array=[self.result];
        self.index = 0;
        self.display(self.result);
        return self.result;
    };

    /********************** CLEAR ENTRY **********************/
    self.clear_entry = function(){
        console.log('Clear entry has been clicked');
        self.num_array[self.index] = '';
        $('.display').html(" ");
        console.log(self.num_array, self.operator);
    };
    
    /********************** CLEAR ALL **********************/
    self.clear = function(){
        console.log('Clear has been clicked');
        self.num_array = [''];
        self.operator = '';
        self.index = 0;
        $('.display').html("");
        console.log(self.num_array, self.operator);
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

