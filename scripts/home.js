'use strict';

/*let slides = []; //start 

// list of images
slides[0] = 'images/athenagoddess.jpg';
slides[1] = 'images/acropolis.jpg';
slides[2] = 'images/theater.jpg';

// main function

let step = 0;
let slider = () => {
    document.slide.src = slides[step];
    step < slides.length - 1 ? step++ : step = 0
    setTimeout("slider()", 2000);
}

window.onload = slider;

/* ===================== */ 




var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}



