/* ENSI HAMBURGER MENU */
const ensiAllLines = document.querySelectorAll('.ensi-hamburger-line'),
    ensiHamburger = document.querySelector('.ensi-hamburger'),
    ensiHamburgerIcon = document.querySelector('.ensi-hamburger-icon'),
    ensiHamText = document.querySelector('.ensi-hamburger-text');

nodeInArr = (list) => {
    return Array.from(list);
}

const allLinesEnsi = nodeInArr(ensiAllLines);
    
ensiHamburger.addEventListener('click', function(){
    allLinesEnsi.forEach(function(i){
        const index = allLinesEnsi.indexOf(i) + 1;
        i.classList.toggle('animate-ensi-line'+ index);
        ensiHamText.classList.toggle('animate-text');
        ensiHamburgerIcon.classList.toggle('animate-box');
    })
})