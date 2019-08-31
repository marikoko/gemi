const ensiBtnAni = document.querySelector('#ensiBtn-ani'),
    ensiBtnText = document.querySelector('#ensiBtn-text'),
    buttons = [ensiBtnAni, ensiBtnText],  
    btnBg = document.querySelector('.animateBg'),    
    delay = 3500;

/* BUTTONS
/* ENLE BTN JS */
animateHoverEnle = (e) => {   
    console.log('hover');
    e.target.classList.add('bounce');
    console.log('bounce');
    e.target.addEventListener('animationend', function(){
        e.target.classList.remove('bounce');
    })
}

animateButtonEnle = (e) => {
    // e.preventDefault();
    const x = e.offsetX;
         y = e.offsetY;
    console.log(e.offsetX, e.offsetY, x, y);
    // btnBg.setAttribute('data-ripple-color', '#EF6A0F');
    btnBg.style.left = x + "px";
    console.log(btnBg.style.top);
    btnBg.style.top = y + "px";
    console.log(btnBg.style.left);
    btnBg.classList.add('grow');
    enleBtn.addEventListener('animationend', animationEndEnle, false);
}

animationEndEnle = () => {
    // enleBtn.style.backgroundColor = '#14c88b';
    btnBg.classList.remove('grow');
    // btnBg.removeAttribute('data-ripple-color', '#EF6A0F');
    removeAllEnle();
}  

removeAllEnle = () => {
    setTimeout(function(){
        console.log('weg');
        enleBtn.style.backgroundColor = '#000';
        btnBg.classList.remove('grow');
    },delay);
}

enleBtn.addEventListener('mouseenter', animateHoverEnle, false);
enleBtn.addEventListener('click', animateButtonEnle, false);


/* FREPI BUTTON JS */ 


/* ENSI BUTTON JS */
animateHoverEnsi = () => {
    buttons.forEach((i) => {
      i.style.backgroundColor = '#5a5a5a';
    })
    ensiBtnText.style.color = "rgba(255,255,255,0.6)";
} 
animateButtonEnsi = (e) => {
    console.log('ensi geklickt');
    e.preventDefault();
    ensiBtn.style.backgroundColor = '#000';
    ensiBtnAni.classList.remove('animate');
    ensiBtnAni.classList.add('animate');
    ensiBtn.addEventListener('animationend', aniDoneSuccessEnsi, false);
}
aniDoneSuccessEnsi = () => {
    console.log('ensi done')
    buttons.forEach((i) => {
        i.style.backgroundColor = '#14c88b';
        ensiBtn.style.border = "0px";
    })
    ensiBtnText.style.color = "#ffffff";
    removeAllEnsi();
}
animationEndEnsi = () => {
    buttons.forEach((i) => {
        console.log('total end');
        i.style.backgroundColor = '#ffffff';
        i.style.color = '#000';
        ensiBtn.style.border = '1px solid #3f3f3f';
    })
}
removeAllEnsi = () => {
    console.log('remove');
    setTimeout(function(){
        ensiBtnAni.classList.remove('animate');
        animationEndEnsi();
        console.log('entfernt nach time');
    },delay);
}
ensiBtn.addEventListener('mouseenter', animateHoverEnsi, false);
ensiBtn.addEventListener('click', animateButtonEnsi, false);


/* RUSA BUTTON JS */ 
animateHoverRusa = () => {
    rusaBtn.style.backgroundColor = '#d492fa';
}
animateButtonRusa = (e) => {
    console.log('rusa geklickt');
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
    rusaBtn.classList.remove('animate-main', 'animate-layer');
    rusaBtn.style.backgroundColor = '#E7C3FC';
  },delay);
}
rusaBtn.addEventListener('mouseenter', animateHoverRusa, false);
rusaBtn.addEventListener('click', animateButtonRusa, false);


/* CHECKBOX */
/* ENSI CHECKBOX JS */
const startbtn = document.querySelector('#start-checkbox');
startbtn.addEventListener('mouseenter', function(e){
    e.preventDefault();
    console.log('hi');
    createAniCheckboxes();
},false);
  
function createAniCheckboxes() {
    const checkboxes = document.querySelectorAll("[data-aniclass='ensi']");
    console.log(checkboxes);
    checkboxes.forEach(function(element, i) {
        const label = document.createElement("label");
        label.classList.add("animate-ensi");
        var labelWrapper = document.createElement("div");
        labelWrapper.innerHTML = (`<span></span>${element.value}`);
        label.appendChild(labelWrapper);
        element.classList.remove("animate-ensi");
        element.parentNode.insertBefore(label, element);
        label.prepend(element);
    });
}