const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});

const controller = new ScrollMagic.Controller();
const tween = new TimelineLite();

// tween.add(TweenLite.to(".bar-fill", 1, { transform: "translate(100px)" }));

const scene = new ScrollMagic.Scene({
  triggerElement: ".home-container",
  duration: 1000,
  offset: 400,
  triggerHook: 0,
})
  .setClassToggle(".box", "fade-out")
  .addTo(controller);

const scene2 = new ScrollMagic.Scene({
  triggerElement: ".home-container",
  duration: 400,
  offset: 500,
  triggerHook: 0,
})
  .setTween(tween)
  .addTo(controller);

const scene3 = new ScrollMagic.Scene({
  triggerElement: ".projects-container",
  duration: 500,
  offset: 200,
  triggerHook: 0.5,
})
  .setClassToggle(".bulb-glass", "bulb-glass-active")
  .addTo(controller);

const scene4 = new ScrollMagic.Scene({
  triggerElement: ".about-container",
  duration: 500,
  offset: 200,
  triggerHook: 0.5,
})
  .setClassToggle(".person-head", "person-head-active")
  .addTo(controller);

const scene5 = new ScrollMagic.Scene({
  triggerElement: ".projects-container",
  duration: 1700,
  offset: -100,
  triggerHook: 0.5,
})
  .setClassToggle(".project-box", "project-box-active")
  .addTo(controller);

const scene6 = new ScrollMagic.Scene({
  triggerElement: ".timeline-container",
  duration: 1000,
  offset: -200,
  triggerHook: 0.5,
})
  .setClassToggle(".bar-fill", "bar-fill-active")
  .addTo(controller)
