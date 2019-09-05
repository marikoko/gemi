/* ------ GENERATOR ---------------------------------------- */
const bi = document.querySelector('header ul'),
    logo = document.querySelector('#logo'),
    header = document.querySelector('header'),
    enleBtn = document.querySelector('#enleBtn'),
    frepiBtn = document.querySelector('#frepiBtn'),
    ensiBtn = document.querySelector('#ensiBtn'),
    rusaBtn = document.querySelector('#rusaBtn'),
    aus = document.querySelector('.ausgabe'),
    logoHeight = logo.offsetHeight,
    biTop = bi.offsetTop,
    stopPoint = biTop - logoHeight;

fixedBi = () => {
    console.log(biTop, window.scrollY);
    if (window.scrollY >= stopPoint) {
        console.log('fixed');
        bi.style.paddingTop = logoHeight + 'px';
        document.body.classList.add('bi-fixed');
    } else {
        console.log('unfixed')
        bi.style.paddingTop = 0;
        document.body.classList.remove('bi-fixed');
    }
}
// window.addEventListener('scroll', fixedBi);