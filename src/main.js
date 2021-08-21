// author: Yuebing

// console.log alias print, defined by me.
let print = console.log;

let element = document.querySelectorAll('path');

const pathMove = anime({
    targets: element,
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
});