// author: Yuebing

// 整个对象
const wakaEl = document.querySelector('.waka');

// hover函数
const animateButton = (scale, duration, elasticity) =>{
  anime.remove(wakaEl);
  anime(
    {
      targets : wakaEl,
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

wakaEl.addEventListener('mouseenter', enterButton, false);
wakaEl.addEventListener('mouseleave', leaveButton, false);

// 点击即送
const btn = document.querySelector('.myself');
const wakasvg = document.querySelector('svg');
const content = document.querySelector('#content');
// console.log(wakasvg)
btn.addEventListener('click', () => {
  wakasvg.classList.remove('active');
  content.classList.add('active');
});

// 所有字母
const letterW = document.querySelector('.w');
const letterA1 = document.querySelector('.a1');
const letterK = document.querySelector('.k');
const letterA2 = document.querySelector('.a2');

// 封装函数
let lettersMove = (letter, direct, 
  easingDirection, 
  transy = [-100, 0],
  keyfr = undefined) => {
  anime({
    targets : letter,
    translateY : transy,
    direction: direct,
    loop: true,
    duration: 2000,
    easing: easingDirection,
    keyframes :  keyfr
  });
};

// 字母移动
const wMoving = lettersMove(letterW, 'alternate', 'spring');
const a1Moving = lettersMove(
  letterA1, 
  'reverse',
  'spring',
  [-100, 0]
);
const kMoving = lettersMove(letterK, 'alternate', 'spring');
const a2Moving = lettersMove(letterA2, 'alternate', 'spring');

// 手势
const thumb = document.querySelector('.finger');
// console.log(thumb);
const thumbMove = anime(
  {
    targets : thumb,
    scale: [1, 1.2],
    loop: true,
    easing: 'linear',
    duration: 1200,
    direction: 'alternate'
  }
);