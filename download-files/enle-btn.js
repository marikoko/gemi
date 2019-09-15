/* ------ GENERATOR ---------------------------------------- */
const enleBtn = document.querySelector('#enleBtn'),
    btnBg = document.querySelector('.animate-enle-btn-bg'),  
    delay = 3500;

colorAll.forEach((i) => {
    i.addEventListener('input', () => {
        if(colorPrim.value || colorAcc.value || colorSec.value) {
            dataObj.primaryColor = colorPrim.value;
            dataObj.accentColor = colorAcc.value;
            dataObj.secondaryColor = colorSec.value;
            if (dataObj.primaryColor || dataObj.accentColor || dataObj.secondaryColor) {
                enleBtn.style.backgroundColor = dataObj.primaryColor;
                btnBg.style.background = dataObj.accentColor;
            }
        } else {
            console.log('nix');
        }
    })
})
animateHoverEnleBtn = (e) => {   
    // console.log('hover');
    e.target.classList.add('bounce');
    // console.log('bounce');
    e.target.addEventListener('animationend', function(){
        e.target.classList.remove('bounce');
    })
}
animateButtonEnleBtn = (e) => {
    e.preventDefault();
    const x = e.offsetX;
         y = e.offsetY;
    // console.log(e.offsetX, e.offsetY, x, y);
    btnBg.style.left = x + "px";
    // console.log(btnBg.style.top);
    btnBg.style.top = y + "px";
    // console.log(btnBg.style.left);
    btnBg.classList.add('enle-btn-grow');
    enleBtn.classList.toggle('bounce');
    enleBtn.addEventListener('animationend', animationEndEnleBtn, false);
}
animationEndEnleBtn = () => {
    btnBg.classList.remove('enle-btn-grow');
}  

enleBtn.addEventListener('mouseenter', animateHoverEnleBtn, false);
enleBtn.addEventListener('click', animateButtonEnleBtn, false);
