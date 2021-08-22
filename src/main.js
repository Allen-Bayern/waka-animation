// author: Yuebing

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
    scale: [2, 1],
    loop: true,
    easing: 'linear',
    duration: 2000,
    direction: 'alternate'
  }
);