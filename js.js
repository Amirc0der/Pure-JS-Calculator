const input = document.querySelector('#monitor');
let fix = 0;
var output = 0;
var show = 0;
var mm = 0;
input.value= 0;

function monitor_update() {
	input.value = show;
}

function add_to_monitor() {
	input.value += show;
}

function calculate() {
	fix = input.value
	fix = fix.replace(")(", ")*(");
	output = eval(fix);
	input.value = output;
	show = 0;
}

function num(x) {
	if (input.value == "0") {
		input.value = ""
	} 
	show = x;
	add_to_monitor();
}

function operator(y) {
	if (input.value.charAt(input.value.length-1) != y) {
		show = y;
		add_to_monitor();
	}
}

function mread() {
	show = mm;
	add_to_monitor();
}

function mclean() {
	mm = 0;
}

function mplus() {
	calculate();
	mm += output;
}

function mminus() {
	calculate();
	mm -= output;
}

function clean() {
	input.value = 0;
}

document.addEventListener('keydown', function(event) {
	if (event.keyCode > 95 && event.keyCode < 106) {
		let mykey = event.keyCode - 96;
		num(mykey);

	} else if (event.keyCode == 8) {
		nummer = input.value;
		nummer = nummer.substring(0, nummer.length - 1);
		input.value = nummer;
	} else if (event.keyCode == 13) {
		calculate();
	}
	switch (event.keyCode) {
		case 110:
			mykey = ".";
			operator(mykey);
			break;
		case 107:
			mykey = "+";
			operator(mykey);
			break;
		case 109:
			mykey = "-";
			operator(mykey);
			break;
		case 106:
			mykey = "*";
			operator(mykey);
			break;
		case 111:
			mykey = "/";
			operator(mykey);
			break;
		case 57:
			mykey = "(";
			num(mykey);
			break;
		case 48:
			mykey = ")";
			num(mykey);
			break;
	}

});
