const frepiAllLines = document.querySelectorAll('.frepi-hamburger-line'),
    frepiHamburger = document.querySelector('.frepi-hamburger'),
    frepiHamburgerIcon = document.querySelector('.frepi-hamburger-icon'),
    frepiHamText = document.querySelector('.frepi-hamburger-text');

nodeInArr = (list) => {
    return Array.from(list);
}

const allLines = nodeInArr(frepiAllLines);

frepiHamburger.addEventListener('click', function(){
    allLines.forEach(function(i){
        const index = allLines.indexOf(i) + 1;

        i.classList.toggle('animate-frepi-line'+ index);
        frepiHamText.classList.toggle('animate-text');
        // frepiHamburgerIcon.style.borderColor = 'pink';
        frepiHamburgerIcon.classList.toggle('animate-box');
    })
})