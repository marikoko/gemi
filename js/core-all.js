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
    stopPoint = biTop - logoHeight,
    colors = {
        custom: {
                primary: '#0D83A3',
                secondary: '#0DA371',
                accent: '#ED743E'
        },
        enle: {
                primary: 'rgba(0,0,0,1)',
                secondary: 'rgba(255,255,255,1)',
                accent: 'rgba(239,106,15,1)'
        },
        frepi: {
                primary: '#rgba(254,198,78,1)',
                secondary: 'rgba(255,255,255,1)',
                accent: 'rgba(255,255,255,1)'
        },
        ensi: {
                primary: 'rgba(255,255,255,1)',
                secondary: 'rgba(90,90,90,1)',
                accent: 'rgba(255,255,255,1)'
        },
        rusa: {
                primary: 'rgba(231,195,252,1)',
                secondary: 'rgba(212, 146, 250,1)',
                accent: 'rgba(255,255,255,1)'
        }
    }
    const codeOut = {
        
    }

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