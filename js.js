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
	fix = input.value;
	for (i=0; i<10 ;i++) {
    		fix = fix.replace(i+'(',i+'*(')
 	}
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
	let opr = input.value.charAt(input.value.length-1)
	if (opr != "-" && opr != "*" && opr != "+" && opr != "/" && opr != ".") {
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
		input.value = input.value.substring(0, input.value.length - 1);
	} else if (event.keyCode == 13) {
		calculate();
	}
	switch (event.keyCode) {
		case 110:
			operator(".");
			break;
		case 107:
			operator("+");
			break;
		case 109:
			operator("-");
			break;
		case 106:
			operator("*");
			break;
		case 111:
			operator("/");
			break;
		case 57:
			num("(");
			break;
		case 48:
			num(")");
			break;
		case 191:
			operator("/");
			break;
	}

});
