const ensiBtn = document.querySelector('#ensiBtn'),
    ensiBtnAni = document.querySelector('#ensiBtn-ani'),
    ensiBtnText = document.querySelector('#ensiBtn-text'),
    buttons = [ensiBtnAni, ensiBtnText],  
    delay = 3500;

/* BUTTONS
/* ENSI BUTTON JS */
animateHoverEnsiBtn = (e) => {
    buttons.forEach((i) => {
      i.style.backgroundColor = '#5a5a5a';
    })
    ensiBtnText.style.color = "rgba(255,255,255,0.6)";
} 
// animateHoverLeaveEnsiBtn = (e) => {
//     buttons.forEach((i) => {
//       i.style.backgroundColor = '#fff';
//     })
//     ensiBtnText.style.color = "rgba(0,0,0,1)";
// } 
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
        i.style.backgroundColor = '#cad170';
        ensiBtn.style.border = "0px";
    })
    ensiBtnText.style.color = "#ffffff";
    ensiBtnText.style.backgroundColor = '#cad170';
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
ensiBtn.addEventListener('mouseover', animateHoverEnsiBtn, false);
// ensiBtn.addEventListener('mouseleave', animateHoverLeaveEnsiBtn, false);
ensiBtn.addEventListener('click', animateButtonEnsiBtn, false);