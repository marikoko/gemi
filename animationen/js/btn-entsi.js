console.log('hallo');

const entsiBtnAni = document.querySelector('#entsiBtn-ani')
      entsiBtnText = document.querySelector('#entsiBtn-text'),
      buttons = [entsiBtnAni, entsiBtnText];
      btn = document.querySelector("#entsiBtn");

animateButton = (e) => {
    // console.log('geklickt');
    e.preventDefault;
    changeColor();

    //reset animation
    entsiBtnAni.classList.remove('animate');
    // console.log('entfernt');

    entsiBtnAni.classList.add('animate');
    // console.log('dazu');
    
    // e.target.classList.add('animate');
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

changeColor = () => {
  buttons.forEach((i) => {
    i.style.backgroundColor = '#5a5a5a';
  })
  entsiBtnText.style.color = "rgba(255,255,255,0.6)";
}

animationEnd = () => {
  buttons.forEach((i) => {
    i.style.backgroundColor = '#ffffff';
    i.style.color = '#000';
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
