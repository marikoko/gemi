const ensiBtnAni = document.querySelector('#ensiBtn-ani'),
    ensiBtnText = document.querySelector('#ensiBtn-text'),
    buttons = [ensiBtnAni, ensiBtnText],
    delay = 3500,
    miChange = {
        button: [
            {
                name: 'btn-prototype',
                borderRadius: 'none',
                backgroundColor: '#fff',
                color: '#313335',
                border: '1px solid #d3d0c9'
            },
            {
                name: 'enle',
                borderRadius: '50%',
                backgroundColor: '#313335',
                color: '#fff',
                border: 'none'
            },
            {
                name: 'frepi',
                borderRadius: '50%',
                backgroundColor: '#E7C3FC',
                color: '#fff',
                border: 'none'
            },
            {
                name: 'ensi',
                borderRadius: '50%',
                backgroundColor: '#fff',
                color: '#000',
                border: 'none'
            },
            {
                name: 'rusa',
                borderRadius: '50%',
                backgroundColor: '#E7C3FC',
                color: '#fff',
                border: 'none'
            }
        ]
}

animateHover = (attr) => {
    switch (attr) {
        case 'enleBtn':
            console.log('enleBtn hover');
            animateHoverEnle();
            break;
        case 'frepiBtn':
            console.log('frepiBtn hover');
            // animateHoverFrepi();
            break;
        case 'ensiBtn':
            console.log('ensiBtn hover');
            animateHoverEnsi();
            break;
        case 'rusaBtn':
            console.log('rusaBtn hover');
            animateHoverRusa();
            break;
        default: 
            console.log('upsi');
    }
}

animateBtn = (attr) => {
    switch (attr) {
        case 'enleBtn':
            btnPrototype.setAttribute('id', attr);
            console.log('enleBtn geklickt');
            animateButtonEnle();
            break;
        case 'frepiBtn':
            btnPrototype.setAttribute('id', attr);
            console.log('frepiBtn geklickt');
            // animateButtonFrepi();
            break;
        case 'ensiBtn':
            btnPrototype.setAttribute('id', attr);
            console.log('ensiBtn geklickt');
            animateButtonEnsi();
            break;
        case 'rusaBtn':
            btnPrototype.setAttribute('id', attr);
            console.log('rusaBtn geklickt');
            animateButtonRusa();
            break;
        default: 
            console.log('upsi');
    }
}

removeAll = () => {
    setTimeout(function(){
        rusaBtn.style.backgroundColor = '#E7C3FC';
        rusaBtn.classList.remove('animate-main', 'animate-layer');
        btnPrototype.setAttribute('id', 'btn-prototype');
    },delay);
}

// /* ENLE JS */
// /* -------- enle js ------------------------------------------*/
animateHoverEnle = () => {   
    btnPrototype.classList.add('bounce');
    console.log('bounce');
    btnPrototype.addEventListener('animationend', function(){
        enleBtn.classList.remove('bounce');
    })
}

animateButtonEnle = () => {
    let btnBg = document.createElement('span');
    btnPrototype.appendChild(btnBg);
    btnBg.setAttribute('class', 'animateBg');
    btnBg.style.backgroundColor = 'red';
    console.log('btn enle geklickt');
    // e.preventDefault();
    const width = 16;
    const circleWidth = width;
    // const x = e.clientX - circleWidth;
    // const y = e.clientY - circleWidth;
    // zum Testen:
    // const ripples = [];
    // ripples.push(x, y);
    // console.log(ripples);
    // btnBg.style.top = y + 'px';
    // console.log(btnBg.style.top);
    // btnBg.style.left = x + 'px';
    // console.log(btnBg.style.left);
    // btnBg.classList.add('grow');
    btnPrototype.addEventListener('animationend', animationEndEnleBtn, false);
    removeAll();
}

animationEndEnleBtn = () => {
    btnPrototype.style.backgroundColor = '#14c88b';
    btnBg.classList.remove('grow');
    btnBg.style.top = 100 + '%';
    console.log(btnBg.style.top + 'ende');
    btnBg.style.left = 240 + '%';
    console.log(btnBg.style.left + 'ende');
}  

removeAllEnle = () => {
    setTimeout(function(){
        btnPrototype.removeChild(btnBg),
        enleBtn.style.backgroundColor = '#14c88b';
        btnBg.classList.remove('grow');
        enleBtn.classList.remove('bounce');
    },delay);
}


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

// removeAll = () => {
//     setTimeout(function(){
//         ensiBtn.classList.remove('animate');
//         animationEnd();
//         console.log('entfernt nach time');
//     },delay);
// }



/* RUSA JS */ 
animateHoverRusa = () => {
    rusaBtn.style.backgroundColor = '#d492fa';
}
animateButtonRusa = () => {
    console.log('frusa geklickt');
    // e.preventDefault;
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
    btnPrototype.setAttribute('id', 'btn-prototype');
  },delay);
}