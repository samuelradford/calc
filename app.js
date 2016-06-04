var currentNumber = 0;
var add = false;
var minus = false;
var multiply = false;
var divide = false;

var calc = {
	sum : 0,
	clear : function() {
		this.sum = 0;
	},
	equals : function() {
		return this.sum;
	},
	add : function(value) {
		this.sum = this.sum + value;
	},
	minus : function(value) {
		this.sum = this.sum - value;
	},
	multiply : function(value) {
		this.sum = this.sum * value;
	},
	divide : function(value) {
		this.sum = this.sum / value;
	}
}

$('.btn-number, .period').click(function(){
	var text = $(this).val();
	$('#total').text($('#total').text() + text);
	currentNumber += text;
});

$('.btn-add').click(function(){
	$('#total').text("");
	calc.sum = parseFloat(currentNumber);
	currentNumber = 0;
	add = true;
});

$('.btn-minus').click(function(){
	$('#total').text("");
	calc.sum = parseFloat(currentNumber);
	currentNumber = 0;
	minus = true;
});

$('.btn-multiply').click(function(){
	$('#total').text("");
	calc.sum = parseFloat(currentNumber);
	currentNumber = 0;
	multiply = true;
});

$('.btn-divide').click(function(){
	$('#total').text("");
	calc.sum = parseFloat(currentNumber);
	currentNumber = 0;
	divide = true;
});

$('.btn-equals').click(function(){
	if (add === true) {
		$('#total').text(calc.equals());
		calc.add(parseFloat(currentNumber));
		$('#total').text(calc.sum);
	} else if (minus === true) {
		$('#total').text(calc.equals());
		calc.minus(parseFloat(currentNumber));
		$('#total').text(calc.sum);
	} else if (multiply === true) {
		$('#total').text(calc.equals());
		calc.multiply(parseFloat(currentNumber));
		$('#total').text(calc.sum);
	} else if (divide === true) {
		$('#total').text(calc.equals());
		calc.divide(parseFloat(currentNumber));
		$('#total').text(calc.sum);
	}
});

$(document).keyup(function(e) {
     if (e.keyCode == 27) {
        $('#total').text("");
        calc.sum = 0;
        currentNumber = 0;
        add = false;
        minus = false;
        multiply = false;
        divide = false;
    }
});