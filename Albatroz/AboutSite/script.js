gsap.to(".bananas", {
  duration: 10,
  top: "calc(100vh - 26vw)",
  scrollTrigger: {
    trigger: ".facts h1",
    start: "top 20%",
    end: "top 10%",
    scrub: true,
    markers: false
  }
});

let factslistcartoon = gsap.timeline({
  scrollTrigger: {
    trigger: ".facts",
    markers: false,
    scrub: true,
    pin: true
  }
});

factslistcartoon
.from(".facts h1", {opacity: 0, x: 600 })
  .from(".f1", { opacity: 0, y: 100 })
  .from(".f2", { opacity: 0, y: 100 })
  .to(".bottom", { opacity: 0 })
  .from(".f3", { opacity: 0, y: 100 })
  .to(".oldish", { opacity: 0 })
  .from(".f4", { opacity: 0, y: 100 })
  .to(".old", { opacity: 0 })
  .from(".f5", { opacity: 0, y: 100 })
  .to(".older", { opacity: 0 })
  .to(".facts, .bananas", {opacity: 0})
  .from(".reasons", {opacity: 0});

let reasonslistcartoon = gsap.timeline({
  scrollTrigger: {
    trigger: ".reasons",
    markers: false,
    scrub: true,
    pin: true
  }
});

reasonslistcartoon
.from(".reasons h1", {opacity: 0, x: 600 })
  .from(".r1", { opacity: 0, y: 100 })
  .from(".r2", { opacity: 0, y: 100 })
  .from(".r3", { opacity: 0, y: 100 })
  .from(".r4", { opacity: 0, y: 100 })
  .from(".r5", { opacity: 0, y: 100 })

let benefitslistcartoon = gsap.timeline({
  scrollTrigger: {
    trigger: ".benefits",
    markers: false,
    scrub: true,
    pin: true
  }
});

benefitslistcartoon
.from(".benefits h1", {opacity: 0, x: 600 })
  .from(".b1", { opacity: 0, y: 100 })
  .from(".b2", { opacity: 0, y: 100 })
  .from(".b3", { opacity: 0, y: 100 })
  .from(".b4", { opacity: 0, y: 100 })

function showi() {
  gsap.to(".what, button", {autoAlpha:0, duration:2});
  // gsap.to(".ways", { autoAlpha: 1});
  // gsap.from(".ways h1",{opacity:0, delay:2, duration:3});  
  
  gsap.set(".findout", {overflow:"auto", delay:3});
}

let wayslistcartoon = gsap.timeline({
  scrollTrigger: {
    trigger: ".findout",
    markers: false,
    scrub: true,
    pin: true
  }
});

wayslistcartoon
.from(".ways h1", { opacity: 0, x: 600 })
  .from(".w1", { opacity: 0, y: 100 })
  .from(".w2", { opacity: 0, y: 100 })
  .from(".w3", { opacity: 0, y: 100 })
  .from(".w4", { opacity: 0, y: 100 })
  .from(".w5", { opacity: 0, y: 100 })