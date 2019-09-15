console.log('rusa');
const rusaBtn = document.querySelector('#rusaBtn'),
    delay = 3500;

/* BUTTONS */
/* RUSA BUTTON JS */ 
animateHoverRusaBtn = () => {
    rusaBtn.style.backgroundColor = '#d492fa';
}
animateButtonRusaBtn = (e) => {
    console.log('rusa geklickt');
    e.preventDefault;
    rusaBtn.style.backgroundColor = '#d492fa';
    rusaBtn.classList.remove('animate-rusa-btn-main', 'animate-rusa-btn-layer');
    rusaBtn.classList.add('animate-rusa-btn-main', 'animate-rusa-btn-layer');
    rusaBtn.addEventListener('animationend', aniSuccessRusaBtn, false);
}
aniSuccessRusaBtn = () => {
    console.log('ende wird gestarte');
    rusaBtn.style.backgroundColor = '#cad170';
    rusaBtn.classList.remove('animate-rusa-btn-main', 'animate-rusa-btn-layer');
    console.log('ende');
    removeAllRusaBtn();
}
removeAllRusaBtn = () => {
  setTimeout(function(){
    rusaBtn.classList.remove('animate-rusa-btn-main', 'animate-rusa-btn-layer');
    rusaBtn.style.backgroundColor = '#E7C3FC';
  },delay);
}
rusaBtn.addEventListener('mouseenter', animateHoverRusaBtn, false);
rusaBtn.addEventListener('click', animateButtonRusaBtn, false);