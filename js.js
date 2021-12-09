const input = document.querySelector('#monitor');
let fix = 0;
let memory = 0;
input.value = 0;

function calculate() {
	fix = input.value
	for (i = 0; i < 10; i++) {  						//fixing multipications like 2(4)
		fix = fix.replace(i + '(', i + '*(')
	}
	fix = fix.replace(")(", ")*(");						// fixing multipilications like (4)(2)
	input.value = eval(fix);
	return eval(fix);
}
function num(x) {
	if (input.value == "0") {
		input.value = "";
	}
	input.value += x;
}
function operator(y) {									// preventing user from typing two operators in a row
	let opr = input.value.charAt(input.value.length - 1)
	if (opr != "-" && opr != "*" && opr != "+" && opr != "/" && opr != ".") {
		input.value += y;
	}
}
function mread() {
	input.value += memory;
}
function mclean() {
	memory = 0;
}
function mplus() {
	memory += calculate();
}
function memoryinus() {
	memory -= calculate();
}
function clean() {
	input.value = 0;
}
												// Codes below adresses the key on the keyboard to the above functions
document.addEventListener('keydown', function(event) {
	if (event.keyCode > 95 && event.keyCode < 106) {					// numpad keys
		let mykey = event.keyCode - 96;
		num(mykey);

	} else if (event.keyCode == 8) { 							 // backspace
		input.value = input.value.substring(0, input.value.length - 1);
	} else if (event.keyCode == 13) {	 						// enter
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
