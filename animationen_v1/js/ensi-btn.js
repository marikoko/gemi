console.log('hallo');

const entsiBtnAni = document.querySelector('#entsiBtn-ani')
      entsiBtnText = document.querySelector('#entsiBtn-text'),
      buttons = [entsiBtnAni, entsiBtnText];
      btn = document.querySelector("#entsiBtn");

changeColorStart = () => {
  buttons.forEach((i) => {
    i.style.backgroundColor = '#5a5a5a';
  })
  entsiBtnText.style.color = "rgba(255,255,255,0.6)";
}

aniDoneSuccess = () => {
  buttons.forEach((i) => {
    i.style.backgroundColor = '#14c88b';
    btn.style.border = "0px";
  })
  entsiBtnText.style.color = "#ffffff";
}

animationEnd = () => {
  buttons.forEach((i) => {
    i.style.backgroundColor = '#ffffff';
    i.style.color = '#000';
    btn.style.border = '1px solid #3f3f3f';
  })
}

removeAll = () => {
  setTimeout(function(){
    entsiBtnAni.classList.remove('animate');
    animationEnd();
    console.log('entfernt nach time');
  },4000);
}

animateButton = (e) => {
  e.preventDefault();
  changeColorStart();
  entsiBtnAni.classList.remove('animate');
  entsiBtnAni.classList.add('animate');
  btn.addEventListener('animationend', aniDoneSuccess, false);
  removeAll();
}

btn.addEventListener('click', animateButton, false);
