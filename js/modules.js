const ensiBtnAni = document.querySelector('#ensiBtn-ani'),
    ensiBtnText = document.querySelector('#ensiBtn-text'),
    buttons = [ensiBtnAni, ensiBtnText],
    delay = 3500;


// /* ENLE JS */
// /* -------- enle js ------------------------------------------*/
animateHoverEnle = (e) => {   
    e.target.classList.add('bounce');
    console.log('bounce');
    e.target.addEventListener('animationend', function(){
        e.target.classList.remove('bounce');
    })
}

animateButtonEnle = (e) => {
    e.preventDefault();
    const width = 16;
    const circleWidth = width;
    const x = e.clientX - circleWidth;
    const y = e.clientY - circleWidth;
    btnBg.style.top = y + 'px';
    console.log(btnBg.style.top);
    btnBg.style.left = x + 'px';
    console.log(btnBg.style.left);
    btnBg.classList.add('grow');
    enleBtn.addEventListener('animationend', animationEndEnleBtn, false);
}

animationEndEnleBtn = () => {
    enleBtn.style.backgroundColor = '#14c88b';
    btnBg.classList.remove('grow');
    btnBg.style.top = 100 + '%';
    console.log(btnBg.style.top + 'ende');
    btnBg.style.left = 240 + '%';
    console.log(btnBg.style.left + 'ende');
    removeAllEnle();
}  

removeAllEnle = () => {
    setTimeout(function(){
        console.log('weg');
        enleBtn.removeChild(btnBg),
        enleBtn.style.backgroundColor = '#14c88b';
        btnBg.classList.remove('grow');
        enleBtn.classList.remove('bounce');
    },delay);
}

animationEnd = () => {
    btn.style.backgroundColor = '#14c88b';
    btnBg.classList.remove('grow');
    btnBg.style.top = 100 + '%';
    console.log(btnBg.style.top + 'ende');
    btnBg.style.left = 240 + '%';
    console.log(btnBg.style.left + 'ende');
}  

removeAll = () => {
    setTimeout(function(){
    btn.style.backgroundColor = '#14c88b';
    btnBg.classList.remove('grow');
    },4000);
}


enleBtn.addEventListener('mouseenter', animateHoverEnle, false);
enleBtn.addEventListener('click', animateButtonEnle, false);


// /* FREPI JS */ 


// /* ENSI JS */
animateHoverEnsi = () => {
    buttons.forEach((i) => {
      i.style.backgroundColor = '#7f8f94';
    })
    ensiBtnText.style.color = "rgba(255,255,255,0.6)";
} 

animateButtonEnsi = () => {
    console.log('ensi geklickt');
    // e.preventDefault();
    // animateHoverEnsi();
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



/* RUSA JS */ 
animateHoverRusa = () => {
    rusaBtn.style.backgroundColor = '#d492fa';
}
animateButtonRusa = (e) => {
    console.log('frusa geklickt');
    e.preventDefault;
    rusaBtn.style.backgroundColor = '#d492fa';
    rusaBtn.classList.remove('animate-main', '.animate-layer');
    rusaBtn.classList.add('animate-main', '.animate-layer');
    rusaBtn.addEventListener('animationend', aniSuccessRusa, false);
}

aniSuccessRusa = () => {
    console.log('ende wird gestarte');
    rusaBtn.style.backgroundColor = '#8FE2AD';
    rusaBtn.classList.remove('animate-main', '.animate-layer');
    console.log('ende');
    removeAllRusa();
}

removeAllRusa = () => {
  setTimeout(function(){
    rusaBtn.classList.remove('animate-main', '.animate-layer');
    rusaBtn.style.backgroundColor = '#E7C3FC';
  },delay);
}

rusaBtn.addEventListener('mouseenter', animateHoverRusa, false);
rusaBtn.addEventListener('click', animateButtonRusa, false);


