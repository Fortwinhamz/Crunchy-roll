

// gsap.to(".main-text", {duration: 5, x: 300});
// gsap.fromTo(".logo", {duration: 5, x: 300}, {duration: 5, y: 300} );

// create a timeline
let tl = gsap.timeline()

//store the tween or timeline in a variable

let tween = gsap.to(".logo", {duration: 1, x: 100});
tween.pause();
tween.reverse();

// add the tweens to the timeline - Note we're using tl.to not gsap.to
tl.to(".text1", { x: 600, duration: 2,} );
tl.to(".purple", { x: 600, duration: 1 }, 1);
// tl.to("h1", { x: 600, duration: 1 , delay: 1 });


gsap.from(".nav", { 
    duration: 2,
    x: 700,
    // rotation: 360,
    // repeat: 2, // the number of repeats - this will play 3 times
    yoyo: true,
    repeatDelay: 1,
    ease: 'bounce.out',
    
});

gsap.from(".text1, h1, img", {
    scale: 0.1, 
    y: 60,
    yoyo: false, 
    rotation: 360,
    ease: "power1.inOut",
    delay:2,
    backgroundColor : '#0cd7df',
    color: '#fff',
    
    stagger: {
      amount: 1, 
      grid: "auto",
      from: "center"
    }
});