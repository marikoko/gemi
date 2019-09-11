/* ------ GENERATOR ---------------------------------------- */
const enleBtn = document.querySelector('#enleBtn'),
    btnBg = document.querySelector('.animate-enle-btn-bg'),  
    delay = 3500;

animateHoverEnleBtn = (e) => {   
    console.log('hover');
    e.target.classList.add('bounce');
    console.log('bounce');
    e.target.addEventListener('animationend', function(){
        e.target.classList.remove('bounce');
    })
}
animateButtonEnleBtn = (e) => {
    e.preventDefault();
    const x = e.offsetX;
         y = e.offsetY;
    console.log(e.offsetX, e.offsetY, x, y);
    btnBg.style.left = x + "px";
    console.log(btnBg.style.top);
    btnBg.style.top = y + "px";
    console.log(btnBg.style.left);
    btnBg.classList.add('enle-btn-grow');
    enleBtn.addEventListener('animationend', animationEndEnleBtn, false);
}
animationEndEnleBtn = () => {
    btnBg.classList.remove('enle-btn-grow');
    removeAllEnleBtn();
}  
removeAllEnleBtn = () => {
    setTimeout(function(){
        console.log('weg');
        enleBtn.style.backgroundColor = '#000';
        btnBg.classList.remove('enle-grow');
    },delay);
}
enleBtn.addEventListener('mouseenter', animateHoverEnleBtn, false);
enleBtn.addEventListener('click', animateButtonEnleBtn, false);
