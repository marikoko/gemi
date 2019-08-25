console.log('halllo');

const rusaBtn = document.querySelector('#rusaBtn');

animationEnd = () => {
    rusaBtn.style.backgroundColor = '#E7C3FC';
    console.log('weg');
}

aniDoneSuccess = () => {
    rusaBtn.style.backgroundColor = '#8FE2AD';
    rusaBtn.classList.remove('animate-main', 'animate-before-after');
    console.log('ende');
}

removeAll = () => {
  setTimeout(function(){
    rusaBtn.classList.remove('animate-main', 'animate-before-after');
    animationEnd();
    console.log('entfernt nach time');
  },4000);
}

animateButton = (e) => {
  e.preventDefault;
  rusaBtn.style.backgroundColor = '#d492fa';
  rusaBtn.classList.remove('animate-main', 'animate-before-after');
  rusaBtn.classList.add('animate-main', 'animate-before-after');
  console.log('animate');
  rusaBtn.addEventListener('animationend', aniDoneSuccess, false);
  removeAll();
}

rusaBtn.addEventListener('click', animateButton, false);
