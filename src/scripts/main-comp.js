// author: Yuebing
import { elements } from './allObjects.js'; // 整个对象

const wakaEl = elements.get('wrap'); // hover函数
// 下方18行代码的作用是当鼠标靠近waka时，它能放大。离开时缩小

const animateButton = (scale, duration, elasticity) => {
  anime.remove(wakaEl);
  anime({
    targets: wakaEl,
    scale: scale,
    duration: duration,
    elasticity: elasticity
  });
};

const enterButton = () => {
  animateButton(1.2, 800, 400);
};

const leaveButton = () => {
  animateButton(1.0, 600, 300);
};

wakaEl.addEventListener('mouseenter', enterButton, false);
wakaEl.addEventListener('mouseleave', leaveButton, false); // 从天而降的数值

const transy = [-100, 0]; // 使用timeline

let tl = anime.timeline({
  easing: 'spring',
  duration: 5000,
  loop: true
});
tl.add({
  targets: elements.get('w'),
  translateY: transy,
  direction: 'alternate'
}).add({
  targets: elements.get('a1'),
  translateY: transy,
  direction: 'alternate'
}).add({
  targets: elements.get('k'),
  translateY: transy,
  direction: 'alternate'
}).add({
  targets: elements.get('a2'),
  translateY: transy,
  direction: 'alternate'
}).add({
  targets: elements.get('thumb'),
  translateY: transy,
  direction: 'alternate'
}).add({
  targets: elements.get('characters'),
  translateY: transy,
  direction: 'alternate'
});
