'use strict';


/* ========== GSAP ANIMATIONS ========== */

const timeline = gsap.timeline({defaults:{duration:1}})
timeline
  gsap.from('#acropolis', {duration: 1, opacity:0, y:'-100%', ease:'ease'})
  gsap.from('#thiseio', {duration: 1, opacity:0, y:'-100%', ease:'ease'})
  gsap.from('#zappeio', {duration: 1, opacity:0, y:'-100%', ease:'ease'})
  gsap.from('.second_menu', {duration: 1, opacity: 0})

  let tl = gsap.timeline ({
    scrollTrigger: {
      trigger: '.info_wrapper',
      start: 'top bottom'
    }
  });

  tl.from(".info_wrapper", {y:100, opacity:0, duration: 1})

  tl.from("#box1", {x:-100, opacity:0, duration:0.5})
  tl.from("#box2", {x:100, opacity:0, duration:0.5}, '-=0.5')
  

