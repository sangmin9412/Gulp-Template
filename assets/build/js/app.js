"use strict";(function(){console.log("- common.js -")})();
"use strict";(function(){})();
"use strict";(function(){document.addEventListener("DOMContentLoaded",function(){var a=new ScrollMagic.Controller,b=gsap.timeline();b.to("#animate1",.5,{backgroundColor:"#333333",scale:2.5,rotation:360,x:130},0),b.to("#animate2",1.5,{opacity:1,scale:1.5,x:-300},0),b.to("#animate3",1,{opacity:1,scale:1.5,x:300},0);var c=new ScrollMagic.Scene({triggerElement:".section-02",triggerHook:.5,duration:document.querySelector(".section-02").clientHeight}).setTween(b).addTo(a).addIndicators({name:"1"}),d=gsap.to(".text-box-wrap",.5,{y:"-20%"}),e=new ScrollMagic.Scene({triggerElement:".section-03",triggerHook:.5,duration:document.querySelector(".section-03").clientHeight-164}).setPin("#pin1",{pushFollowers:!1}).setTween(d).addTo(a).addIndicators({name:"2"}).on("progress",function(){}),f=gsap.to(".bg1",.5,{opacity:0}),g=new ScrollMagic.Scene({triggerElement:".section-03",triggerHook:.5,duration:"100%"}).setTween(f).addTo(a).addIndicators({name:"3"}),h=document.querySelector(".horizontal-content").clientWidth-window.innerWidth,i=gsap.to(".horizontal-content",{x:-h,ease:"none"});document.querySelector(".section-04").style.height=h+"px";new ScrollMagic.Scene({triggerElement:".section-04",triggerHook:0,duration:h-window.innerHeight}).setPin(".horizontal-content",{pushFollowers:!1}).setTween(i).addTo(a).addIndicators({name:"4"}).on("progress",function(){})})})();