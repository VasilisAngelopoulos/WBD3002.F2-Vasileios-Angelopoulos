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
      trigger: '.third_menu',
      start: 'top bottom'
    }
  });

  let tl1 = gsap.timeline ({
    scrollTrigger: {
      trigger: '#description',
      start: 'top center'
    }
  });

/*   let tl2 = gsap.timeline ({
    scrollTrigger: {
      trigger: '#description',
      start: 'top center'
    }
  }); */
    

  tl1.from("#description", {y:100, opacity:0, duration: 1})

  tl1.from("#box1", {x:-100, opacity:0, duration:0.5})
  tl1.from("#box2", {x:100, opacity:0, duration:0.5}, '-=0.5')
  
  tl1.from("#info_box", {y:100, opacity:0, duration: 1})
  tl1.from("#services_box", {y:100, opacity:0, duration: 0.5}, '-=0.5')

