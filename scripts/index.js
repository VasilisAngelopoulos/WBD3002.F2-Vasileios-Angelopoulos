'use strict';

/* ========== Image gallery ========== */

let counter = 1; 
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 3){
    counter = 1;
  }
}, 3000);


/* ========== GSAP ANIMATIONS ========== */


const timeline = gsap.timeline({defaults:{duration:1}})
timeline
  gsap.from('#acropolis', {duration: 1, opacity:0, y:'-100%', ease:'ease'})
  gsap.from('#thiseio', {duration: 1, opacity:0, y:'-100%', ease:'ease'})
  gsap.from('#zappeio', {duration: 1, opacity:0, y:'-100%', ease:'ease'})
  gsap.from('.second_menu', {duration: 1, opacity: 0})
  gsap.from('#history', {duration: 1, opacity: 0})


  let tl = gsap.timeline ({
    scrollTrigger: {
      trigger: '.third_menu',
      start: 'top bottom'
    }
  });
    
  
  tl.from(".card_body_2", {y:100, opacity:0, duration: 1})
  tl.from("#acropolis-location", {y:100, opacity:0, duration: 0.5})
  tl.from("#acropolis-description", {y:100, opacity:0, duration: 0.5}, '-=0.5')

  tl.from("#thiseio-location", {y:100, opacity:0, duration: 0.5})
  tl.from("#thiseio-description", {y:100, opacity:0, duration: 0.5}, '-=0.5')

  tl.from("#zappeion-location", {y:100, opacity:0, duration: 0.5})
  tl.from("#zappeion-description", {y:100, opacity:0, duration: 0.5}, '-=0.5')

  tl.from("#box1", {x:-100, opacity:0, duration:0.5})
  tl.from("#box2", {x:100, opacity:0, duration:0.5}, '-=0.5')

/* ========== JSON FILES ========== */
    
  fetch("./assets/main.json")
  .then((response) => response.json())
  .then((data) => {
    for (const locations of data.locations) {
      document.getElementById("acropolis-description").innerHTML = locations.acropolis_paragraph.acropolis_description; 
      document.getElementById("thiseio-description").innerHTML = locations.thisseio_paragraph.thisseio_description; 
      document.getElementById("zappeion-description").innerHTML = locations.zappeion_paragraph.zappeion_description; 
    }
  })















   

  
