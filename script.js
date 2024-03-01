var crsr = document.querySelector(".cursor");
var main = document.querySelector(".main");
var videos = document.querySelectorAll("video");
var rows = document.querySelectorAll(".row");
var h4 = document.querySelectorAll(".nav h4");
var over = document.querySelector("#overlay");
function init() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
    tablet: { smooth: true },
    smartphone: { smooth: true },
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
init();

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";

  crsr.animate(
    {
      left: `${dets.x}px`,
      top: `${dets.y}px`,
    },
    { duration: 1500, fill: "forwards" }
  );
});
gsap.from(".page1 h1,.page1 h2", {
  y: 10,
  rotate: 10,
  opacity: 0,
  delay: 0.3,
  duration: 0.7,
});
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    start: "top 27%",
    end: "top 0",
    scrub: 3,
    // markers: true,
  },
});
tl.to(
  ".page1 h1",
  {
    x: -100,
  },
  "anim"
);
tl.to(
  ".page1 h2",
  {
    x: 100,
  },
  "anim"
);
tl.to(
  ".page1 video",
  {
    width: "90%",
  },
  "anim"
);
var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    start: "top -115%",
    end: "top -120%",
    scrub: 3,
  },
});
tl2.to(".main", {
  backgroundColor: "#fff",
});
// cursor on video
function cursorOnVideo(video, text1, text2) {
  crsr.classList.add("cursor-active");
  if (video.muted) {
    crsr.innerHTML = text1;
  } else {
    crsr.innerHTML = text2;
  }
}

videos.forEach((video) => {
  video.addEventListener("mousemove", function () {
    cursorOnVideo(video, "sound on", "sound off");
  });
});

videos.forEach((video) => {
  video.addEventListener("mouseenter", function () {
    cursorOnVideo(video, "sound on", "sound off");
  });
});

videos.forEach((video) => {
  video.addEventListener("mouseleave", function () {
    crsr.classList.remove("cursor-active");
    crsr.innerHTML = "";
  });
});

var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page3",
    scroller: ".main",
    start: "top 15%",
    end: "top -35%",
    scrub: 3,
  },
});
tl3.from(
  "#img1",
  {
    x: -100,
  },
  "start"
);

tl3.from(
  "#img2",
  {
    x: 100,
  },
  "start"
);
var tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1",
    scroller: ".main",
    start: "top -340%",
    end: "top -360%",
    scrub: 3,
  },
});
tl4.to(".main", {
  backgroundColor: "#0F0D0D",
});
// cursor on rows
rows.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    var attr = elem.getAttribute("data-image");
    crsr.style.width = "320px";
    crsr.style.height = "240px";
    crsr.style.borderRadius = "0";
    crsr.style.backgroundImage = `url(${attr})`;
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.width = "20px";
    crsr.style.height = "20px";
    crsr.style.borderRadius = "50%";
    crsr.style.backgroundImage = `none`;
  });
});
h4.forEach(function (elem) {
  elem.addEventListener("mouseenter",function(){
    over.style.display = "block"
    over.style.opacity = "1"
  })
  elem.addEventListener("mouseleave",function(){
    over.style.display = "none"
    over.style.opacity = "0"
  })
});
