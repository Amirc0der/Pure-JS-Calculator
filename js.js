const input = document.getElementById('monitor');
let fix = 0;
var output = 0;
var show = 0;
var a = 0;
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
	fix = fix.replace("--", "-");
	fix = fix.replace("**", "*");
	fix = fix.replace("//", "/");
	fix = fix.replace("..", ".");
	output = eval(fix);
	input.innerHTML = output;
	show = 0;
}

function num(x) {
	show = x;
	if (a == 0) {
		monitor_update();
		a = 1;
	} else {
		add_to_monitor();
	}
}

function operator(y) {
	show = y;
	add_to_monitor();
}

function mread() {
	show = mm;
	if (a == 0) {
		monitor_update();
		a = 1;
	} else {
		add_to_monitor();
	}
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
	show = "0";
	monitor_update();
	a = 0;
}

function equal() {
	calculate();
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
		equal();
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
	}

});
