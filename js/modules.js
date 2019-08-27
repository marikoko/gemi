function geklickt (e) {
    alert('hi');
}

const ensiBtnAni = document.querySelector('#ensiBtn-ani'),
    ensiBtnText = document.querySelector('#ensiBtn-text'),
    buttons = [ensiBtnAni, ensiBtnText],
    delay = 3500;

/* ENLE JS */
/* -------- enle js ------------------------------------------*/
animationEndEnleBtn = () => {
    enleBtn.style.backgroundColor = '#14c88b';
    btnBg.classList.remove('grow');
    btnBg.style.top = 100 + '%';
    console.log(btnBg.style.top + 'ende');
    btnBg.style.left = 240 + '%';
    console.log(btnBg.style.left + 'ende');
}  

// removeAll = () => {
//     setTimeout(function(){
//         enleBtn.style.backgroundColor = '#14c88b';
//         btnBg.classList.remove('grow');
//     },4000);
// }

animateButton = (e) => {
    console.log('btn enle geklickt');
    e.preventDefault();
    const width = 16;
    const circleWidth = width;
    const x = e.clientX - circleWidth;
    const y = e.clientY - circleWidth;
    // zum Testen:
    const ripples = [];
    ripples.push(x, y);
    console.log(ripples);
    btnBg.style.top = y + 'px';
    console.log(btnBg.style.top);
    btnBg.style.left = x + 'px';
    console.log(btnBg.style.left);
    btnBg.classList.add('grow');
    enleBtn.addEventListener('animationend', animationEndEnleBtn, false);
    removeAll(enleBtn, 'grow');
}

bounce = (e) => {   
    e.target.classList.add('bounce');
    console.log('bounce');
    e.target.addEventListener('animationend', function(){
        e.target.classList.remove('bounce');
    })
}

enleBtn.addEventListener('mouseenter', bounce, false);
enleBtn.addEventListener('click', animateButton, false);


/* FREPI JS */ 
frepiBtn.addEventListener('click', geklickt, false);


/* ENSI JS */
animateHoverEnsi = () => {
    buttons.forEach((i) => {
      i.style.backgroundColor = '#7f8f94';
    })
    ensiBtnText.style.color = "rgba(255,255,255,0.6)";
} 

animateButtonEnsi = (e) => {
    console.log('ensi geklickt');
    e.preventDefault();
    animateHoverEnsi();
    ensiBtn.style.backgroundColor = '#000';
    ensiBtn.classList.remove('animate');
    ensiBtn.classList.add('animate');
    ensiBtn.addEventListener('animationend', aniDoneSuccessEnsi, false);
    removeAll();
}

aniDoneSuccessEnsi = () => {
    buttons.forEach((i) => {
        i.style.backgroundColor = '#14c88b';
        ensiBtn.style.border = "0px";
    })
ensiBtnText.style.color = "#ffffff";
}

animationEndEnsiBtn = () => {
    buttons.forEach((i) => {
        i.style.backgroundColor = '#ffffff';
        i.style.color = '#000';
        ensiBtn.style.border = '1px solid #3f3f3f';
    })
}

removeAll = () => {
    setTimeout(function(){
        ensiBtn.classList.remove('animate');
        animationEnd();
        console.log('entfernt nach time');
    },delay);
}

ensiBtn.addEventListener('mouseenter', animateHoverEnsi, false);
ensiBtn.addEventListener('click', animateButtonEnsi, false);


/* RUSA JS */ 
animateHoverRusa = () => {
    rusaBtn.style.backgroundColor = '#d492fa';
}
animateButtonRusa = (e) => {
    console.log('frusa geklickt');
    e.preventDefault;
    rusaBtn.style.backgroundColor = '#d492fa';
    rusaBtn.classList.remove('animate-main', 'animate-layer');
    rusaBtn.classList.add('animate-main', 'animate-layer');
    rusaBtn.addEventListener('animationend', aniSuccessRusa, false);
}
aniSuccessRusa = () => {
    console.log('ende wird gestarte');
    rusaBtn.style.backgroundColor = '#8FE2AD';
    rusaBtn.classList.remove('animate-main', 'animate-layer');
    console.log('ende');
    removeAllRusa();
}
removeAllRusa = () => {
  setTimeout(function(){
    rusaBtn.style.backgroundColor = '#E7C3FC';
    rusaBtn.classList.remove('animate-main', 'animate-layer');
    console.log('entfernt nach delay');
  },delay);
}
rusaBtn.addEventListener('mouseenter', animateHoverRusa, false);
rusaBtn.addEventListener('click', animateButtonRusa, false);
