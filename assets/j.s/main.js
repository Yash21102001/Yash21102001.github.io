window.onscroll = function() {
    if (document.body.scrolltop > 0 || document.documentElement.scrollTop > 0) {
        document.getElementById('navbar').classList.add('scrolled');
    } else {
        document.getElementById('navbar').classList.remove('scrolled')
    }
}

const follower = document.getElementById("mouse-follower");
const dot = document.getElementById("dot");

function cursorAnimateEvent(elements) {
  window.addEventListener("mousemove", (e) => {
    elements.forEach((element) => {
      element.name.animate(
        [
          {
            opacity: 1,
            left: `${e.clientX}px`,
            top: `${e.clientY}px`,
            easing: "ease-in-out"
          }
        ],
        {
          duration: element.duration,
          fill: "forwards"
        }
      );
    });
  });

  window.addEventListener("mouseout", (e) => {
    elements.forEach((element) => {
      element.name.animate(
        [
          {
            opacity: 1
          },
          {
            opacity: 0,
            easing: "ease-in-out"
          }
        ],
        {
          duration: element.fadeOut,
          fill: "forwards"
        }
      );
    });
  });
}

cursorAnimateEvent([
  {
    name: follower,
    duration: 2000,
    fadeOut: 100
  },
  {
    name: dot,
    duration: 1000,
    fadeOut: 100
  }
]);
