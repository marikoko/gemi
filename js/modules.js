const ensiBtnAni = document.querySelector('#ensiBtn-ani'),
    ensiBtnText = document.querySelector('#ensiBtn-text'),
    buttons = [ensiBtnAni, ensiBtnText],  
    btnBg = document.querySelector('.animate-enle-btn-bg'),  
    svgLines = document.querySelector('svg'),  
    delay = 3500;

/* BUTTONS
/* ENLE BTN JS */
enleBtn.style.backgroundColor=colors.primary;
btnBg.style.backgroundColor = colors.accent;
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