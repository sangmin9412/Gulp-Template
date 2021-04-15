(() => {
  document.addEventListener("DOMContentLoaded", function () {
    const controller = new ScrollMagic.Controller();

    const tl = gsap.timeline();
    tl.to("#animate1", 0.5, {
      backgroundColor: "#333333",
      scale: 2.5,
      rotation: 360,
      x: 130,
    }, 0);

    tl.to("#animate2", 1.5, {
      opacity: 1,
      scale: 1.5,
      x: -300,
    }, 0);

    tl.to("#animate3", 1, {
      opacity: 1,
      scale: 1.5,
      x: 300,
    }, 0);

    const scene = new ScrollMagic.Scene({
      triggerElement: ".section-02",
      triggerHook: 0.5,
      duration: document.querySelector(".section-02").clientHeight,
    })
      .setTween(tl)
      .addTo(controller)
      .addIndicators({
        name: "1"
      });

    const tween1 = gsap.to(".text-box-wrap", 0.5, {
      y: "-20%",
    })

    const scene2 = new ScrollMagic.Scene({
      triggerElement: ".section-03",
      triggerHook: 0.5,
      duration: document.querySelector(".section-03").clientHeight - 164,
    })
      .setPin("#pin1", { pushFollowers: false })
      .setTween(tween1)
      .addTo(controller)
      .addIndicators({
        name: "2"
      }).on("progress", function (event) {

      })

    const tween2 = gsap.to(".bg1", 0.5, {
      opacity: 0,
    })

    const scene3 = new ScrollMagic.Scene({
      triggerElement: ".section-03",
      triggerHook: 0.5,
      duration: "100%",
    })
      .setTween(tween2)
      .addTo(controller)
      .addIndicators({
        name: "3"
      })


    const _width = document.querySelector(".horizontal-content").clientWidth - window.innerWidth;
    const tween3 = gsap.to(".horizontal-content", {
      x: -_width,
      ease: "none",
    })

    document.querySelector(".section-04").style.height = (_width) + "px";

    const scene4 = new ScrollMagic.Scene({
      triggerElement: ".section-04",
      triggerHook: 0,
      duration: _width - window.innerHeight,
    })
      .setPin(".horizontal-content", { pushFollowers: false })
      .setTween(tween3)
      .addTo(controller)
      .addIndicators({
        name: "4"
      })
      .on("progress", function (event) {

      });

  });

})();