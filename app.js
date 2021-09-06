const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});

const tl = new TimelineLite({ paused: true });

tl.to(".box", 1, { width: "100px", ease: Power2.easeOut });

const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
  triggerElement: ".home-container",
  duration: 1000,
  triggerHook: 0,
})
  .setTween(tween)
  .addIndicators()
  .addTo(controller);
