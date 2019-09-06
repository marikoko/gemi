const frepiBtn = document.querySelector('#frepiBtn'),
    svgLines = document.querySelector('svg'),
    delay = 3500;

/* FREPI BUTTON JS */ 
animateHoverFrepiBtn = () => {
    console.log('hover');
    frepiBtn.style.color = '#313335';
    frepiBtn.style.backgroundColor = 'rgba(254, 198, 78, 1)';
}
animateButtonFrepiBtn = (e) => {
    console.log('frepi geklickt');
    e.preventDefault;
    frepiBtn.classList.remove('breath', 'animate-frepi-btn');
    frepiBtn.classList.add('animate-frepi-btn');
    svgLines.classList.add('animate-lines');

    svgLines.addEventListener('animationend', aniSuccessFrepiBtn, false);
}
aniSuccessFrepiBtn = () => {
    console.log('ende wird gestarte');
    frepiBtn.style.backgroundColor = '#8FE2AD';
    frepiBtn.classList.remove('animate-frepi-btn');
    svgLines.classList.remove('animate-lines');
    console.log('ende');
    removeAllFrepiBtn();
}
removeAllFrepiBtn = () => {
  setTimeout(function(){
    svgLines.classList.remove('animate-lines');
    frepiBtn.classList.remove('animate-frepi-btn');
    frepiBtn.style.backgroundColor = 'rgba(254, 198, 78, 0.6)';
  },delay);
}
frepiBtn.addEventListener('mouseenter', animateHoverFrepiBtn, false);
frepiBtn.addEventListener('click', animateButtonFrepiBtn, false);

