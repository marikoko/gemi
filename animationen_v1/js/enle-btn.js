const btn = document.querySelector('#enleBtn'),
        btnBg = document.querySelector('.animateBg'),
        box = document.querySelector('.box');
        
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

animateButton = (e) => {
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
    btn.addEventListener('animationend', animationEnd, false);
    removeAll();
}

bounce = (e) => {   
    e.target.classList.add('bounce');
    console.log('bounce');
    e.target.addEventListener('animationend', function(){
        e.target.classList.remove('bounce');
    })
}


btn.addEventListener('mouseenter', bounce, false);
btn.addEventListener('click', animateButton, false);