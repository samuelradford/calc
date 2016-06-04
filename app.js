var total = 0
var currentNumber = 0;

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
	var text = ($(this).val());
	$('#total').text($('#total').text() + text);
	currentNumber += text;
	console.log(currentNumber);
	calc.sum = parseFloat(currentNumber);
});

$('.btn-add').click(function(){
	$('#total').text("");
	
});

$('.btn-equals').click(function(){
	$('#total').text(calc.equals());
});

$(document).keyup(function(e) {
     if (e.keyCode == 27) {
        $('#total').text("");
        calc.sum = 0;
    }
});