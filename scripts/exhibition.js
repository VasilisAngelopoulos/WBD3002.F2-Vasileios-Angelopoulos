'use strict';


/* ========== GSAP ANIMATIONS ========== */

const timeline = gsap.timeline()
timeline
  gsap.from('#acropolis', {duration: 1, opacity:0, y:'-100%', ease:'ease'})
  gsap.from('#thiseio', {duration: 1, opacity:0, y:'-100%', ease:'ease'})
  gsap.from('#zappeio', {duration: 1, opacity:0, y:'-100%', ease:'ease'})
  gsap.from('.second_menu', {duration: 1, opacity: 0})
  gsap.from('#banner_box_title', {duration:2, opacity: 0, x: '-100%', ease: 'ease'})
  gsap.from('#banner_box_text', {duration:2, opacity: 0, x: '-100%', ease: 'ease'})

  let tl = gsap.timeline ({
    scrollTrigger: {
      trigger: '.info_wrapper',
      start: 'top bottom'
    }
  });

  tl.from(".info_wrapper", {y:100, opacity:0, duration: 1})

  tl.from("#box1", {x:-100, opacity:0, duration:0.5})
  tl.from("#box2", {x:100, opacity:0, duration:0.5}, '-=0.5')
  

