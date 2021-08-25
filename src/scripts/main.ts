import { elements } from "./allObj";
import anime from 'animejs/lib/anime.es.js';

// hover函数
// 下方18行代码的作用是当鼠标靠近waka时，它能放大。离开时缩小
const animateButton : Function = (scale : Number, duration : Number, elasticity: Number) =>{
    anime.remove(elements.get('wrap'));
    anime(
      {
        targets : elements.get('wrap'),
        scale : scale,
        duration : duration,
        elasticity : elasticity
      }
    );
  };
  
function enterButton(){
    animateButton(1.2, 800, 400);
};
  
function leaveButton(){
    animateButton(1.0, 600, 300);
};
  
  elements.get('wrap').addEventListener('mouseenter', enterButton, false);
  elements.get('wrap').addEventListener('mouseleave', leaveButton, false);

  // 从天而降的数值
const transy : Array<Number> = [-100, 0];

// 使用timeline
let tl = anime.timeline({
    easing: 'spring',
    duration: 5000,
    loop: true
});
  
tl.add({
    targets : elements.get('w'),
    translateY: transy,
    direction: 'alternate',
}).add({
    targets: elements.get('a1'),
    translateY: transy,
    direction: 'alternate',
}).add({
    targets: elements.get('k'),
    translateY: transy,
    direction: 'alternate',
}).add({
    targets: elements.get('a2'),
    translateY: transy,
    direction: 'alternate',
}).add({
    targets: elements.get('thumb'),
    translateY: transy,
    direction: 'alternate',
}).add({
    targets: elements.get('characters'),
    translateY: transy,
    direction: 'alternate',
});