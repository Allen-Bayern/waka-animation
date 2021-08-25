const elements : Map<String, HTMLElement> = new Map();

elements.set('wrap', document.querySelector('.waka'));
elements.set('w', document.querySelector('.w'));
elements.set('a2', document.querySelector('.a1'));
elements.set('k', document.querySelector('.k'));
elements.set('a1', document.querySelector('.a2'));
elements.set('thumb', document.querySelector('.finger'));
elements.set('characters', document.querySelector('.character'));

export {elements};