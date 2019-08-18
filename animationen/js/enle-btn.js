const btn = document.querySelector('#enleBtn'),
        btnBg = document.querySelector('.animateBg'),
        box = document.querySelector('.box');
        
animationEnd = () => {
    // btnBg.style.opacity = 0;
    // btn.style.backgroundColor = '#14c88b';
    // btnBg.classList.remove('grow');
}  

removeAll = () => {
    setTimeout(function(){
    btnBg.classList.remove('grow');
    animationEnd();
    },4000);
}

animateButton = (e) => {
    // btn.removeEventListener('mouseover', bounce, false);
    e.preventDefault();
    const width = 16;
    const circleWidth = width;
    const x = e.clientX - circleWidth;
    const y = e.clientY - circleWidth;
    // const ripples = [];
    // ripples.push(x, y);
    // console.log(ripples);
    btnBg.style.opacity = 1;
    btnBg.style.top = y + 'px';
    btnBg.style.left = x + 'px';
    btnBg.classList.add('grow');
    // btn.addEventListener('animationend', animationEnd, false);
    removeAll();
}

bounce = (e) => {   
    e.target.classList.add('bounce');
    console.log('bounce');
    e.target.addEventListener('animationend', function(){
        e.target.classList.remove('bounce');
    })
}

btn.addEventListener('mouseover', bounce, false);
btn.addEventListener('click', animateButton, false);