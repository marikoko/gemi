console.log('hallo');

const entsiBtnAni = document.querySelector('#entsiBtn-ani')
      entsiBtnText = document.querySelector('#entsiBtn-text'),
      buttons = [entsiBtnAni, entsiBtnText];
      btn = document.querySelector("#entsiBtn");

animateButton = (e) => {
    // console.log('geklickt');
    e.preventDefault;
    changeColorStart();

    //reset animation
    entsiBtnAni.classList.remove('animate');
    // console.log('entfernt');
    entsiBtnAni.classList.add('animate');
    // console.log('dazu');
    btn.addEventListener('animationend', aniDoneSuccess, false);
    // console.log('dazu2');
    removeAll();

    //reset animation
    // e.target.classList.remove('animate');

    // console.log('entfernt');
    // e.target.classList.add('animate');
    // console.log('dazu');
    
    // e.target.classList.add('animate');
    // console.log('dazu2');
    // setTimeout(function(){
    //   e.target.classList.remove('animate');
    //   console.log('entfernt nach time');
    // },6000);
  };

changeColorStart = () => {
  buttons.forEach((i) => {
    i.style.backgroundColor = '#5a5a5a';
  })
  entsiBtnText.style.color = "rgba(255,255,255,0.6)";
}

aniDoneSuccess = () => {
  console.log('Success ani zu ende');
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
  },6000);
}

btn.addEventListener('click', animateButton, false);
