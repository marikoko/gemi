const ensiBtnAni = document.querySelector('#ensiBtn-ani'),
    ensiBtnText = document.querySelector('#ensiBtn-text'),
    buttons = [ensiBtnAni, ensiBtnText],  
    btnBg = document.querySelector('.animate-enle-btn-bg'),  
    svgLines = document.querySelector('svg'),  
    delay = 3500;

/* BUTTONS
/* ENLE BTN JS */
animateHoverEnleBtn = (e) => {   
    console.log('hover');
    e.target.classList.add('bounce');
    console.log('bounce');
    e.target.addEventListener('animationend', function(){
        e.target.classList.remove('bounce');
    })
}
animateButtonEnleBtn = (e) => {
    // e.preventDefault();
    const x = e.offsetX;
         y = e.offsetY;
    console.log(e.offsetX, e.offsetY, x, y);
    // btnBg.setAttribute('data-ripple-color', '#EF6A0F');
    btnBg.style.left = x + "px";
    console.log(btnBg.style.top);
    btnBg.style.top = y + "px";
    console.log(btnBg.style.left);
    btnBg.classList.add('enle-btn-grow');
    enleBtn.addEventListener('animationend', animationEndEnleBtn, false);
}
animationEndEnleBtn = () => {
    // enleBtn.style.backgroundColor = '#14c88b';
    btnBg.classList.remove('enle-btn-grow');
    // btnBg.removeAttribute('data-ripple-color', '#EF6A0F');
    removeAllEnleBtn();
}  
removeAllEnleBtn = () => {
    setTimeout(function(){
        console.log('weg');
        enleBtn.style.backgroundColor = '#000';
        btnBg.classList.remove('enle-grow');
    },delay);
}
enleBtn.addEventListener('mouseenter', animateHoverEnleBtn, false);
enleBtn.addEventListener('click', animateButtonEnleBtn, false);


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


/* ENSI BUTTON JS */
animateHoverEnsiBtn = () => {
    buttons.forEach((i) => {
      i.style.backgroundColor = '#5a5a5a';
    })
    ensiBtnText.style.color = "rgba(255,255,255,0.6)";
} 
animateButtonEnsiBtn = (e) => {
    console.log('ensi geklickt');
    e.preventDefault();
    ensiBtn.style.backgroundColor = '#000';
    ensiBtnAni.classList.remove('animate-ensi-btn');
    ensiBtnAni.classList.add('animate-ensi-btn');
    ensiBtn.addEventListener('animationend', aniDoneSuccessEnsiBtn, false);
}
aniDoneSuccessEnsiBtn = () => {
    console.log('ensi done')
    buttons.forEach((i) => {
        i.style.backgroundColor = '#14c88b';
        ensiBtn.style.border = "0px";
    })
    ensiBtnText.style.color = "#ffffff";
    removeAllEnsiBtn();
}
animationEndEnsiBtn = () => {
    buttons.forEach((i) => {
        console.log('total end');
        i.style.backgroundColor = '#ffffff';
        i.style.color = '#000';
        ensiBtn.style.border = '1px solid #3f3f3f';
    })
}
removeAllEnsiBtn = () => {
    console.log('remove');
    setTimeout(function(){
        ensiBtnAni.classList.remove('animate-ensi-btn');
        animationEndEnsiBtn();
        console.log('entfernt nach time');
    },delay);
}
ensiBtn.addEventListener('mouseenter', animateHoverEnsiBtn, false);
ensiBtn.addEventListener('click', animateButtonEnsiBtn, false);


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
    rusaBtn.style.backgroundColor = '#8FE2AD';
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


/* CHECKBOX: no js necessary */

/* HAMBURGER MENU */
/* ENSI HAMBURGER MENU */
const ensiAllLines = document.querySelectorAll('.ensi-hamburger-line'),
    ensiHamburger = document.querySelector('.ensi-hamburger'),
    ensiHamburgerIcon = document.querySelector('.ensi-hamburger-icon'),
    ensiHamText = document.querySelector('.ensi-hamburger-text');

nodeInArr = (list) => {
    return Array.from(list);
}

const allLines = nodeInArr(ensiAllLines);

ensiHamburger.addEventListener('click', function(){
    allLines.forEach(function(i){
        const index = allLines.indexOf(i) + 1;
        i.classList.toggle('animate-ensi-line'+ index);
        ensiHamText.classList.toggle('animate-text');
        // ensiHamburgerIcon.style.borderColor = 'pink';
        ensiHamburgerIcon.classList.toggle('animate-box');
    })
})

/* RUSA HAMBURGER MENU */
const rusaHamburger = document.querySelector('.rusa-hamburger')
    rusaAllLines = document.querySelectorAll('.rusa-hamburger-line'),
    rusaHamText = document.querySelector('.rusa-hamburger-text');

rusaHamburger.addEventListener('click', function(){
    console.log('geklickt');
    rusaAllLines.forEach(function(i){
        i.classList.toggle('animate-rusa-lines');
        rusaHamText.classList.toggle('animate-rusa-text');
    })
})
