'use strict';

let slides = []; //start 

// list of images
slides[0] = 'images/22.jpg';
slides[1] = 'images/acropolis.jpg';
slides[2] = 'images/greek-king.jpg';

// main function

let step = 0;
let slider = () => {
    document.slide.src = slides[step];
    step < slides.length - 1 ? step++ : step = 0
    setTimeout("slider()", 5000);
}

window.onload = slider;