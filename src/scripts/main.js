"use strict";

var allObj_1 = require("./allObj");
var anime_es_js_1 = require("animejs/lib/anime.es.js");
// hover函数
// 下方18行代码的作用是当鼠标靠近waka时，它能放大。离开时缩小
var animateButton = function (scale, duration, elasticity) {
    anime_es_js_1["default"].remove(allObj_1.elements.get('wrap'));
    anime_es_js_1["default"]({
        targets: allObj_1.elements.get('wrap'),
        scale: scale,
        duration: duration,
        elasticity: elasticity
    });
};
function enterButton() {
    animateButton(1.2, 800, 400);
}
;
function leaveButton() {
    animateButton(1.0, 600, 300);
}
;
allObj_1.elements.get('wrap').addEventListener('mouseenter', enterButton, false);
allObj_1.elements.get('wrap').addEventListener('mouseleave', leaveButton, false);
// 从天而降的数值
var transy = [-100, 0];
// 使用timeline
var tl = anime_es_js_1["default"].timeline({
    easing: 'spring',
    duration: 5000,
    loop: true
});
tl.add({
    targets: allObj_1.elements.get('w'),
    translateY: transy,
    direction: 'alternate'
}).add({
    targets: allObj_1.elements.get('a1'),
    translateY: transy,
    direction: 'alternate'
}).add({
    targets: allObj_1.elements.get('k'),
    translateY: transy,
    direction: 'alternate'
}).add({
    targets: allObj_1.elements.get('a2'),
    translateY: transy,
    direction: 'alternate'
}).add({
    targets: allObj_1.elements.get('thumb'),
    translateY: transy,
    direction: 'alternate'
}).add({
    targets: allObj_1.elements.get('characters'),
    translateY: transy,
    direction: 'alternate'
});
