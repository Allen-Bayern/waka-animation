// author: Yuebing

const elem = {
    'wrap' : document.querySelector('.waka'),
    'logo' : document.querySelector('svg'),
    'w': document.querySelector('.w'),
    'a1': document.querySelector('.a2'),
    'k': document.querySelector('.k'),
    'a2' :  document.querySelector('.a1'),
    'thumb': document.querySelector('.finger'),
    'characters': document.querySelector('.character')
};

//  -----------------------------------------------------------------

// hover函数
// 下方18行代码的作用是当鼠标靠近waka时，它能放大。离开时缩小
const animateButton = (scale, duration, elasticity) =>{
  anime.remove(elem['wrap']);
  anime(
    {
      targets : elem['wrap'],
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

elem['wrap'].addEventListener('mouseenter', enterButton, false);
elem['wrap'].addEventListener('mouseleave', leaveButton, false);

//  ----------------------------------------------------------------

// 从天而降的数值
const transy = [-100, 0];

// 使用timeline
let tl = anime.timeline({
    easing: 'spring',
    duration: 2500,
    loop: true
});
  
tl.add({
    targets : elem['w'],
    translateY: transy,
    direction: 'alternate',
}).add({
    targets: elem['a1'],
    translateY: transy,
    direction: 'alternate',
}).add({
    targets: elem['k'],
    translateY: transy,
    direction: 'alternate',
}).add({
    targets: elem['a2'],
    translateY: transy,
    direction: 'alternate',
}).add({
    targets: elem['thumb'],
    translateY: transy,
    direction: 'alternate',
}).add({
    targets: elem['characters'],
    translateY: transy,
    direction: 'alternate',
});