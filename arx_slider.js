const timerlength = 5000 // Change it if you want to change the autoslide speed (in miliseconds, 10000 means 10 seconds) 
const slider = document.querySelector(".slider");
const sliderImg = slider.querySelectorAll("img");
const sliderPreviusButton = slider.querySelector(".left")
const sliderNextButton = slider.querySelector(".right")
const slider_dots_holder = slider.querySelector(".slider_dots_holder")
const sliderCount = slider.querySelectorAll("img").length - 1

let currentSlider = 0;
let dotsnum = sliderCount + 1;
// CreateDots function creates clickable dots on the bottom of the slider based on the number of images
function CreateDots () {
	if ( dotsnum != 0 ) {
		const newtag = document.createElement("div");
		newtag.classList.add("slider_dots");
		newtag.setAttribute("id", dotsnum)
		newtag.setAttribute("onclick", ("sliderJump" + "(" + (sliderCount-(dotsnum-1)) + ")") )
		slider_dots_holder.appendChild(newtag);
		dotsnum--;
		CreateDots()
	}
}
CreateDots()
const sliderdots =  slider.querySelectorAll(".slider_dots")
function sliderShow () {
	sliderImg[currentSlider].style.opacity = "1";
	sliderdots[currentSlider].style.opacity = "1";
}
function sliderHide () {
	sliderImg[currentSlider].style.opacity = "0";
	sliderdots[currentSlider].style.opacity = "0.5";
}
function slidNext () {
	if (currentSlider < sliderCount) {
		sliderHide();
		currentSlider ++;
		sliderShow();
	}
}
function slidePrevius () {
	if (currentSlider > 0) {
		sliderHide();
		currentSlider --;
		sliderShow();
	}
}
function sliderJump(number) {
	sliderHide();
	currentSlider = number;
	sliderShow();
}

sliderPreviusButton.addEventListener("click", slidePrevius);
sliderNextButton.addEventListener("click", slidNext);
sliderShow()
// Auto Play Codes (autoplay is Optional. you can remove the below code if you do not want Autoplay)
function slideTimer () {
	if (currentSlider < sliderCount) {
		slidNext ()
		window.setTimeout (slideTimer, timerlength) 
	} else {
		sliderJump(0)
		window.setTimeout (slideTimer, timerlength) 
	}
}
window.setTimeout (slideTimer, timerlength);
