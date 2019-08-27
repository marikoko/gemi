console.log('hallo');
const enlebBtn = document.querySelector('#enleBtn'),
        btnBg = document.querySelector('.animateBg'),
        box = document.querySelector('.box'),
        // enleAniBtn = document.querySelector("#enleBtn");
        // ensiAniBtn = document.querySelector("#ensiBtn");
        ensiBtnAni = document.querySelector('#ensiBtn-ani')
        ensiBtnText = document.querySelector('#ensiBtn-text'),
        buttons = [ensiAniBtnAni, ensiBtnText];

        // rusaBtn = document.querySelector('#rusaBtn');


/* -------- enle js ------------------------------------------*/
animationEndEnleBtn = () => {
    enleBtn.style.backgroundColor = '#14c88b';
    btnBg.classList.remove('grow');
    btnBg.style.top = 100 + '%';
    console.log(btnBg.style.top + 'ende');
    btnBg.style.left = 240 + '%';
    console.log(btnBg.style.left + 'ende');
}  

removeAll = () => {
    setTimeout(function(){
        enleBtn.style.backgroundColor = '#14c88b';
        btnBg.classList.remove('grow');
    },4000);
}

animateButton = (e) => {
    console.log('anibnt enle geklickt');
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
    removeAll();
}

bounce = (e) => {   
    e.target.classList.add('bounce');
    console.log('bounce');
    e.target.addEventListener('animationend', function(){
        e.target.classList.remove('bounce');
    })
}


// enleBtn.addEventListener('mouseenter', bounce, false);
enleBtn.addEventListener('click', animateButton, false);

/* -------- enle Ende --------------------------------------*/



/* -------- ensi js ----------------------------------------*/
changeColorStart = () => {
  buttons.forEach((i) => {
    i.style.backgroundColor = '#5a5a5a';
  })
  entsiBtnText.style.color = "rgba(255,255,255,0.6)";
}

aniDoneSuccess = () => {
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
    ensiBtnAni.classList.remove('animate');
    animationEnd();
    console.log('entfernt nach time');
  },4000);
}

animateButton = (e) => {
  e.preventDefault();
            changeColorStart();
            ensiBtnAni.classList.remove('animate');
            entiBtnAni.classList.add('animate');
        ensiBtn.addEventListener('animationend', aniDoneSuccess, false);
  removeAll();
}

ensiBtn.addEventListener('click', animateButton, false);

/* -------- ensi Ende --------------------------------------*/


/* -------- rusa js ----------------------------------------*/
animationEnd = () => {
    rusaBtn.style.backgroundColor = '#E7C3FC';
    console.log('weg');
}

aniDoneSuccess = () => {
    rusaBtn.style.backgroundColor = '#8FE2AD';
    rusaBtn.classList.remove('animate-main', 'animate-layer');
    console.log('ende');
}

removeAll = () => {
  setTimeout(function(){
    rusaBtn.classList.remove('animate-main', 'animate-layer');
    animationEnd();
    console.log('entfernt nach time');
  },4000);
}

animateButton = (e) => {
  console.log('geklickt');
  e.preventDefault;
  rusaBtn.style.backgroundColor = '#d492fa';
  // rusaBtn.classList.remove('animate-main', 'animate-layer');
  // rusaBtn.classList.add('animate-main', 'animate-layer');
  // console.log('animate');
  // rusaBtn.addEventListener('animationend', aniDoneSuccess, false);
  // removeAll();
}

animateHover = (e) => {
  rusaBtn.classList.add('rusa-hover');
}

// rusaBtn.addEventListener('mouseenter', animateHover, false);
rusaBtn.addEventListener('click', function(){alert('hi');});
/* -------- rusa Ende --------------------------------------*/
