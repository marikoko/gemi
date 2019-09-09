/* RUSA HAMBURGER MENU */
const rusaHamburger = document.querySelector('.rusa-hamburger')
    rusaAllLines = document.querySelectorAll('.rusa-hamburger-line'),
    rusaHamText = document.querySelector('.rusa-hamburger-text');

rusaHamburger.addEventListener('click', function(){
    console.log('geklickt');
    rusaAllLines.forEach(function(i){
        i.classList.toggle('animate-rusa-lines');
        rusaHamText.classList.toggle('animate-rusa-text');
    })
})
