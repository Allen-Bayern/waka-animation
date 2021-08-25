// author: Yuebing

// all elements
const elements = new Map();

// add values
elements.set('wrap', document.querySelector('.waka'));
elements.set('logo', document.querySelector('svg'));
elements.set('w', document.querySelector('.w'));
elements.set('a2', document.querySelector('.a1'));
elements.set('k', document.querySelector('.k'));
elements.set('a1', document.querySelector('.a2'));
elements.set('thumb', document.querySelector('.finger'));
elements.set('characters', document.querySelector('.character'));

//  -----------------------------------------------------------------

// hover函数
// 下方18行代码的作用是当鼠标靠近waka时，它能放大。离开时缩小
const animateButton = (scale, duration, elasticity) =>{
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

const enterButton = () =>{
  animateButton(1.2, 800, 400);
};

const leaveButton = () => {
  animateButton(1.0, 600, 300);
};

elements.get('wrap').addEventListener('mouseenter', enterButton, false);
elements.get('wrap').addEventListener('mouseleave', leaveButton, false);

//  ----------------------------------------------------------------

// 从天而降的数值
const transy = [-100, 0];

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