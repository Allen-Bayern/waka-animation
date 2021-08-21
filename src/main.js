// author: Yuebing

const svgPath = document.querySelectorAll('path');
console.log(svgPath);

const svgText = anime({
  targets: svgPath,
  loop: true,
  direction: 'alternate',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 7000,
  delay: (el, i) => { return i * 500 }
});