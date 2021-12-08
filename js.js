const input = document.getElementById('monitor');
let fix = 0;
var output = 0;
var show = 0;
var mm = 0;

function monitor_update() {
	input.innerHTML = show;
}

function add_to_monitor() {
	input.innerHTML += show;
}

function calculate() {
	fix = input.innerHTML
	fix = fix.replace("++", "+");
	fix = fix.replace("--", "+");
	fix = fix.replace("**", "*");
	fix = fix.replace("//", "/");
	fix = fix.replace("..", ".");
	fix = fix.replace(")(", ")*(");
	output = eval(fix);
	input.innerHTML = output;
	show = 0;
}

function num(x) {
	if (input.innerHTML == "0") {
		input.innerHTML = ""
	} 
	show = x;
	add_to_monitor();
}

function operator(y) {
	show = y;
	add_to_monitor();
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
	input.innerHTML = 0;
}

document.addEventListener('keydown', function(event) {
	if (event.keyCode > 95 && event.keyCode < 106) {
		let mykey = event.keyCode - 96;
		num(mykey);

	} else if (event.keyCode == 8) {
		nummer = input.innerHTML;
		nummer = nummer.substring(0, nummer.length - 1);
		input.innerHTML = nummer;
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
