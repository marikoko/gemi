/* ------ GENERATOR ---------------------------------------- */
/* STORE ANIMATIONTYPE IN DATA-OBJECT */
console.log('core');
const dataObj = {
    name: [],
    component: [],
    bi: [],
    primaryColor: [],
    secondaryColor: [],
    accentColor: [],
    fullType: function() {
        return this.component + this.bi;
        }
    },
    selectionArea = document.querySelector('.selection'),
    component = document.querySelector('#component'),
    selectComp = document.querySelectorAll('#components .buttons'),
    selectBrand = document.querySelectorAll('#brandidentity .buttons'),
    selectButtons = document.querySelectorAll('.buttons'),
    colorPrim = document.querySelector('#primary'),
    colorSec = document.querySelector('#secondary'),
    colorAcc = document.querySelector('#accent'),
    colorAll = document.querySelectorAll('.color'),
    getCode = document.querySelector('.get-code'),

    aniPreview = document.querySelector('#ani-preview'),
    outputHTML = document.querySelector('.output-html'),
    outputCSS = document.querySelector('.output-css'),
    outputJS = document.querySelector('.output-js'),
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
    codeObj = {
        buttons: [
            {
                name: "enle-btn",
                html: "enle-btn-html",
                css: "enle-btn-css",
                js: "enle-btn-js"
            },
            {
                name: "frepi-btn",
                html: "frepi-btn-html",
                css: "frepi-btn-css",
                js: "frepi-btn-js"
            },
            {
                name: "ensi-btn",
                html: "ensi-btn-html",
                css: "ensi-btn-css",
                js: "ensi-btn-js"
            },
            {
                name: "rusa-btn",
                html: "rusa-btn-html",
                css: "rusa-btn-css",
                js: "rusa-btn-js"
            }
        ],
        checkbox: [
            {
                name: "enle-check",
                html: "enle-check-html",
                css: "enle-check-css",
                js: "enle-check-js"
            },
            {
                name: "frepi-check",
                html: '<div class="container center frepiC"> <label for="frepiC" class="animate-frepi"> <input id="frepiC" type="checkbox" name="category" value="value"> <div> <span></span> Text <svg width="156" height="144" viewBox="0 0 156 144" fill="black" xmlns="http://www.w3.org/2000/svg"> <circle cx="42" cy="28" r="3"/> <circle cx="42" cy="88" r="3"/> <circle cx="102" cy="119" r="3"/> <circle cx="122" cy="58" r="3"/> <circle cx="102" cy="20" r="3"/> <circle cx="70.5" cy="30.5" r="1.5"/> <circle cx="20.5" cy="62.5" r="1.5"/> <circle cx="50.5" cy="114.5" r="1.5"/> <circle cx="130.5" cy="86.5" r="1.5"/> <circle cx="100.5" cy="48.5" r="1.5"/> <circle cx="87.5" cy="93.5" r="1.5"/> </svg> <svg width="156" height="144" viewBox="0 0 156 144" fill="black" xmlns="http://www.w3.org/2000/svg"> <circle cx="42" cy="28" r="3"/> <circle cx="42" cy="88" r="3"/> <circle cx="102" cy="119" r="3"/> <circle cx="122" cy="58" r="3"/> <circle cx="102" cy="20" r="3"/> <circle cx="70.5" cy="30.5" r="1.5"/> <circle cx="20.5" cy="62.5" r="1.5"/> <circle cx="50.5" cy="114.5" r="1.5"/> <circle cx="130.5" cy="86.5" r="1.5"/> <circle cx="100.5" cy="48.5" r="1.5"/> <circle cx="87.5" cy="93.5" r="1.5"/> </svg> </div></label> </div>',
                css: '.animate-frepi input{display: none;}.animate-frepi div{display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-align: center; -ms-flex-align: center; align-items: center;}.frepiC label{font-size: 1.2rem;}/* CHECK FREPI */.animate-frepi{width: 200px; height: 50px; padding: 0 20px; margin-bottom: 10px; display: block; color: rgba(0, 0, 0, 0.5); line-height: 50px; position: relative; cursor: pointer; -webkit-transition: all 0.3s ease; -o-transition: all 0.3s ease; transition: all 0.3s ease; z-index: 1;}.animate-frepi span{position: relative; width: 22px; height: 22px; margin-right: 13px; background-color: white; border: 2px solid darkgrey; border-radius: 100%; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-align: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -ms-flex-pack: center; justify-content: center;}.animate-frepi span::before{content: ""; width: 8px; height: 8px; border-radius: 100%; -webkit-transition: all 0.3s ease; -o-transition: all 0.3s ease; transition: all 0.3s ease;}.animate-frepi span::after{content: ""; position: absolute; left: 0; top: 0; right: 0; bottom: 0; -webkit-box-shadow: 0 0 0 1px #fff; box-shadow: 0 0 0 1px #fff; border-radius: 100%; opacity: 0;}.animate-frepi svg{position: absolute; left: -50px; top: -50px; opacity: 0; visibility: hidden;}.animate-frepi div::before{content: ""; position: absolute; top: 5px; right: 5px; bottom: 5px; left: 5px; z-index: -1; -webkit-transition: all 0.3s ease; -o-transition: all 0.3s ease; transition: all 0.3s ease; border-radius: 6px;}.animate-frepi:hover div span::before{-webkit-animation: wobble 0.3s ease; animation: wobble 0.3s ease; background-color: #dbdbd2;}.animate-frepi:hover div::before{background-color: #f1f1eb; border: 1px solid #dbdbd2;}.animate-frepi input:checked + div{color: #3c3b3a;}.animate-frepi input:checked + div::before{-webkit-animation: wobble 0.3s ease; animation: wobble 0.3s ease; /* background-color: #37425f; */ color: #dbdbd2; border: 1px solid #a6ac5c;}.animate-frepi input:checked + div span{background-color: #fff; -webkit-animation: littleBounce 0.3s ease, wobble 0.3s ease; animation: littleBounce 0.3s ease, wobble 0.3s ease;}.animate-frepi input:checked + div span::before{background-color: #3c3b3a;}.animate-frepi input:checked + div svg,.animate-frepi.submit svg{-webkit-animation: showParticles 0.4s ease; animation: showParticles 0.4s ease;}.animate-frepi input:checked + div svg:last-child,.animate-frepi.submit svg:last-child{-webkit-animation: showParticlesRotateChange 0.3s ease; animation: showParticlesRotateChange 0.3s ease;}/* ANIMATIONS */@keyframes wobble{0%{-webkit-transform: scale(1) rotate(0deg); transform: scale(1) rotate(0deg);}40%{-webkit-transform: scale(1.1, 0.9) rotate(5deg); transform: scale(1.1, 0.9) rotate(5deg);}70%{-webkit-transform: scale(0.9, 1.1) rotate(-3deg); transform: scale(0.9, 1.1) rotate(-3deg);}80%{-webkit-transform: scale(1.05, 0.95) rotate(1deg); transform: scale(1.05, 0.95) rotate(1deg);}100%{-webkit-transform: scale(1) rotate(0deg); transform: scale(1) rotate(0deg);}}@-webkit-keyframes wobble{0%{-webkit-transform: scale(1) rotate(0deg);}40%{-webkit-transform: scale(1.1, 0.9) rotate(5deg);}70%{-webkit-transform: scale(0.9, 1.1) rotate(-3deg);}80%{-webkit-transform: scale(1.05, 0.95) rotate(1deg);}100%{-webkit-transform: scale(1) rotate(0deg);}}@keyframes showParticles{0%{opacity: 0; visibility: visible; -webkit-transform: scale(0.25) rotate(0); transform: scale(0.25) rotate(0);}50%{opacity: 0.4;}100%{opacity: 0; -webkit-transform: scale(0.5) rotate(20deg); transform: scale(0.5) rotate(20deg);}}@-webkit-keyframes showParticles{0%{opacity: 0; visibility: visible; -webkit-transform: scale(0.25) rotate(0);}50%{opacity: 0.4;}100%{opacity: 0; -webkit-transform: scale(0.5) rotate(20deg);}}@keyframes showParticlesRotateChange{0%{opacity: 0; visibility: visible; -webkit-transform: scale(0.25) rotate(0); transform: scale(0.25) rotate(0);}50%{opacity: 0.4;}100%{opacity: 0; -webkit-transform: scale(0.5) rotate(-20deg); transform: scale(0.5) rotate(-20deg);}}@-webkit-keyframes showParticlesRotateChange{0%{opacity: 0; visibility: visible; -webkit-transform: scale(0.25) rotate(0);}50%{opacity: 0.4;}100%{opacity: 0; -webkit-transform: scale(0.5) rotate(-20deg);}}',
                js: " "
            },
            {
                name: "ensi-check",
                html: "ensi-check-html",
                css: "ensi-check-css",
                js: "ensi-check-js"
            },
            {
                name: "rusa-check",
                html: "rusa-check-html",
                css: "rusa-check-css",
                js: "rusa-check-js"
            }
        ],
        menu: [
            {
                name: "enle-menu",
                html: '<div class="center"> <div class="enle-hamburger"> <div class="enle-hamburger-icon"> <div class="enle-hamburger-line enletopline"></div><div class="enle-hamburger-line enlemidline"></div><div class="enle-hamburger-line enlebotline"></div></div><div class="enle-hamburger-text">MENU</div></div></div>',
                css: "/* HAMBURGER ENLE */.enle-hamburger{margin-left: 10%; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-pack: start; -ms-flex-pack: start; justify-content: flex-start; -webkit-box-align: center; -ms-flex-align: center; align-items: center; cursor: pointer;}.enle-hamburger-icon{width: 46px; height: 38px; padding: 0 2px 0 4px; position: relative; -webkit-transition: all 0.5s ease-in-out; -o-transition: all 0.5s ease-in-out; transition: all 0.5s ease-in-out;}.enle-hamburger:hover .enletopline{-webkit-transform: translateY(-5px); -ms-transform: translateY(-5px); transform: translateY(-5px); opacity: 1;}.enle-hamburger:hover .enlemidline{-webkit-transform: translateY(0); -ms-transform: translateY(0); transform: translateY(0); opacity: 1;}.enle-hamburger:hover .enlebotline{-webkit-transform: translateY(5px); -ms-transform: translateY(5px); transform: translateY(5px); opacity: 1;}.enle-hamburger-line{position: absolute; width: 40px; height: 4px; background-color: #3c3b3a; opacity: 0.3; border-radius: 2px; overflow: hidden; position: absolute; -webkit-transition: all 0.5s ease-in-out; -o-transition: all 0.5s ease-in-out; transition: all 0.5s ease-in-out;}.enle-hamburger-line:nth-child(1){top: 6px;}.enle-hamburger-line:nth-child(2){top: 15px;}.enle-hamburger-line:nth-child(3){top: 24px;}.animate-line1{-webkit-animation: enleline1 1s ease-in forwards; animation: enleline1 1s ease-in forwards;}.animate-line2{-webkit-animation: enleline2 1s ease-in forwards; animation: enleline2 1s ease-in forwards;}.animate-line3{-webkit-animation: enleline3 1s ease-in forwards; animation: enleline3 1s ease-in forwards;}.enle-hamburger-text{font-size: 1.5rem; color: #dbdbd2; margin-left: 20px; -webkit-transition: color 0.2s ease-in; -o-transition: color 0.2s ease-in; transition: color 0.2s ease-in;}.animate-text{color: #3c3b3a;}/* Animations */@-webkit-keyframes enleline1{0%{-webkit-transform: translasteY(0); transform: translasteY(0);}10%{-webkit-transform: translateY(9px); transform: translateY(9px);}20%{-webkit-transform: translateY(-20px); transform: translateY(-20px);}30%{opacity: 0;}40%{opacity: 1; -webkit-transform: translateY(13px) rotate(45deg) scaleX(0.65); transform: translateY(13px) rotate(45deg) scaleX(0.65);}50%{opacity: 1; -webkit-transform: translateY(9px) rotate(45deg) scaleX(0.65); transform: translateY(9px) rotate(45deg) scaleX(0.65);}52%{-webkit-transform: translateY(9px) rotate(32deg) scaleX(0.65); transform: translateY(9px) rotate(32deg) scaleX(0.65);}56%{-webkit-transform: translateY(9px) rotate(52deg) scaleX(0.65); transform: translateY(9px) rotate(52deg) scaleX(0.65);}60%{-webkit-transform: translateY(9px) rotate(43deg) scaleX(0.65); transform: translateY(9px) rotate(43deg) scaleX(0.65);}100%{opacity: 1; -webkit-transform: translateY(9px) rotate(45deg) scaleX(0.65); transform: translateY(9px) rotate(45deg) scaleX(0.65);}}@keyframes enleline1{0%{-webkit-transform: translasteY(0); transform: translasteY(0);}10%{-webkit-transform: translateY(9px); transform: translateY(9px);}20%{-webkit-transform: translateY(-20px); transform: translateY(-20px);}30%{opacity: 0;}40%{opacity: 1; -webkit-transform: translateY(13px) rotate(45deg) scaleX(0.65); transform: translateY(13px) rotate(45deg) scaleX(0.65);}50%{opacity: 1; -webkit-transform: translateY(9px) rotate(45deg) scaleX(0.65); transform: translateY(9px) rotate(45deg) scaleX(0.65);}52%{-webkit-transform: translateY(9px) rotate(32deg) scaleX(0.65); transform: translateY(9px) rotate(32deg) scaleX(0.65);}56%{-webkit-transform: translateY(9px) rotate(52deg) scaleX(0.65); transform: translateY(9px) rotate(52deg) scaleX(0.65);}60%{-webkit-transform: translateY(9px) rotate(43deg) scaleX(0.65); transform: translateY(9px) rotate(43deg) scaleX(0.65);}100%{opacity: 1; -webkit-transform: translateY(9px) rotate(45deg) scaleX(0.65); transform: translateY(9px) rotate(45deg) scaleX(0.65);}}@-webkit-keyframes enleline2{0%{-webkit-transform: translasteY(0); transform: translasteY(0);}10%{-webkit-transform: scaleX(1.2); transform: scaleX(1.2); height: 3px;}20%{-webkit-transform: rotate(5deg); transform: rotate(5deg);}24%{-webkit-transform: rotate(-5deg); transform: rotate(-5deg);}28%{-webkit-transform: rotate(3deg); transform: rotate(3deg);}40%{opacity: 0;}60%{opacity: 0;}100%{opacity: 0;}}@keyframes enleline2{0%{-webkit-transform: translasteY(0); transform: translasteY(0);}10%{-webkit-transform: scaleX(1.2); transform: scaleX(1.2); height: 3px;}20%{-webkit-transform: rotate(5deg); transform: rotate(5deg);}24%{-webkit-transform: rotate(-5deg); transform: rotate(-5deg);}28%{-webkit-transform: rotate(3deg); transform: rotate(3deg);}40%{opacity: 0;}60%{opacity: 0;}100%{opacity: 0;}}@-webkit-keyframes enleline3{0%{-webkit-transform: translateY(0); transform: translateY(0);}10%{-webkit-transform: translateY(-9px); transform: translateY(-9px);}20%{-webkit-transform: translateY(19px); transform: translateY(19px);}30%{opacity: 0;}40%{opacity: 1; -webkit-transform: translateY(-13px) rotate(-45deg) scaleX(0.65); transform: translateY(-13px) rotate(-45deg) scaleX(0.65);}50%{opacity: 1; -webkit-transform: translateY(-9px) rotate(-45deg) scaleX(0.65); transform: translateY(-9px) rotate(-45deg) scaleX(0.65);}52%{-webkit-transform: translateY(-9px) rotate(-32deg) scaleX(0.65); transform: translateY(-9px) rotate(-32deg) scaleX(0.65);}56%{-webkit-transform: translateY(-9px) rotate(-52deg) scaleX(0.65); transform: translateY(-9px) rotate(-52deg) scaleX(0.65);}60%{-webkit-transform: translateY(-9px) rotate(-43deg) scaleX(0.65); transform: translateY(-9px) rotate(-43deg) scaleX(0.65);}100%{opacity: 1; -webkit-transform: translateY(-9px) rotate(-45deg) scaleX(0.65); transform: translateY(-9px) rotate(-45deg) scaleX(0.65);}}@keyframes enleline3{0%{-webkit-transform: translateY(0); transform: translateY(0);}10%{-webkit-transform: translateY(-9px); transform: translateY(-9px);}20%{-webkit-transform: translateY(19px); transform: translateY(19px);}30%{opacity: 0;}40%{opacity: 1; -webkit-transform: translateY(-13px) rotate(-45deg) scaleX(0.65); transform: translateY(-13px) rotate(-45deg) scaleX(0.65);}50%{opacity: 1; -webkit-transform: translateY(-9px) rotate(-45deg) scaleX(0.65); transform: translateY(-9px) rotate(-45deg) scaleX(0.65);}52%{-webkit-transform: translateY(-9px) rotate(-32deg) scaleX(0.65); transform: translateY(-9px) rotate(-32deg) scaleX(0.65);}56%{-webkit-transform: translateY(-9px) rotate(-52deg) scaleX(0.65); transform: translateY(-9px) rotate(-52deg) scaleX(0.65);}60%{-webkit-transform: translateY(-9px) rotate(-43deg) scaleX(0.65); transform: translateY(-9px) rotate(-43deg) scaleX(0.65);}100%{opacity: 1; -webkit-transform: translateY(-9px) rotate(-45deg) scaleX(0.65); transform: translateY(-9px) rotate(-45deg) scaleX(0.65);}}",
                js: "const enleHamburger=document.querySelector('.enle-hamburger'), enleHamburgerText=document.querySelector('.enle-hamburger-text'), enleTopline=document.querySelector('.enletopline'), enleMidline=document.querySelector('.enlemidline'), enleBotline=document.querySelector('.enlebotline');enleHamburger.addEventListener('click', function(){enleTopline.classList.toggle('animate-line1'); enleMidline.classList.toggle('animate-line2'); enleBotline.classList.toggle('animate-line3'); enleHamburgerText.classList.toggle('animate-text');})"
            },
            {
                name: "frepi-menu",
                html: "frepi-menu-html",
                css: "frepi-menu-css",
                js: "frepi-menu-js"
            },
            {
                name: "ensi-menu",
                html: "ensi-menu-html",
                css: "ensi-menu-css",
                js: "ensi-menu-js"
            },
            {
                name: "rusa-menu",
                html: "rusa-menu-html",
                css: "rusa-menu-css",
                js: "rusa-menu-js"
            }
        ],
    };


/* button selected functions */

selectComponent = (e) => {
    selectComp.forEach((i) => {
        if(i.classList.contains('active')){
            i.classList.remove('active');
        }
        i.addEventListener('click', function(e){
             selectComp.forEach((i) => {
                i.classList.remove('active');
            })
            i.classList.add('active');
        })
    })
}
selectBrandidentity = (e) => {
    selectBrand.forEach((i) => {
        i.addEventListener('click', function(e){
            selectBrand.forEach((i) => {
                i.classList.remove('active');
            })
            i.classList.add('active');
        })
    })
}
// Funktion um Nodelist in Array umzuwandeln
nodeInArr = (list) => {
    return Array.from(list);
    }


/* TEMPLATE */
const templateBtn = (type) =>{
    window.location = "https://marikoko.github.io/gemi/templates/"+type+".html";
    // window.location = "../templates/"+type+".html";
}


/* RENDERING */
// Function to render the UI into the DOM
const render = (aniType) => {
    if (!aniType) return;
    console.log(aniType);
    switch (aniType) {
        case '1A': 
        console.log('enle-btn');
        templateBtn('enle-btn');
        break;
        case '1B':
        console.log('frepi-btn');
        templateBtn('frepi-btn');
        break;
        case '1C':
        console.log('ensi-btn');
        templateBtn('ensi-btn');
        break;
        case'1D':
        console.log('rusa-btn');
        templateBtn('rusa-btn');
        break;
        case'2A':
        console.log('enle-check');
        templateBtn('enle-check');
        break;
        case'2B':
        console.log('frepi-check');
        templateBtn('frepi-check');
        break;
        case'2C':
        console.log('ensi-check');
        templateBtn('ensi-check');
        break;
        case'2D':
        console.log('rusa-check');
        templateBtn('rusa-check');
        break;
        case'3A':
        console.log('enle-menu');
        templateBtn('enle-menu');
        break;
        case'3B':
        console.log('frepi-menu');
        templateBtn('frepi-menu');
        break;
        case'3C':
        console.log('ensi-menu');
        templateBtn('ensi-menu');
        break;
        case'3D':
        console.log('rusa-menu');
        templateBtn('rusa-menu');
        break;
        default:
        return '<p>Oops, something went wrong. Select the desired one again in the Selction Area.</p>';
    }
}

/* UI UPDATE NACH CLICK */
selectButtons.forEach((i) => {
    i.addEventListener('click', (e) => {
        console.log('aniType');
        // Stop the event
        e.preventDefault();
        if(!i.classList.contains('active')) {
            i.classList.add('active');
        }  else {
            i.classList.remove('active');
        }
        // selectComponent(e);
        // selectBrandidentity(e);
        // Get button
        // var btn = event.target.querySelector('#btn');
        var btn = e.target;

        console.log(btn);
        var type = btn.getAttribute('data-type');
        console.log(type);

        if(type ==='comp') {
            console.log('Yeah');
            // Update data
            // old version: dataObj.component.push(btn.dataset.comp);
            dataObj.component[0] = btn.dataset.comp;
        } else if(type ==='bi'){
            console.log('wooooo');
            dataObj.bi[0] = btn.dataset.bi;
        } else {
            console.log('fehler');
        }

        // save complete anityp 
        aniType = dataObj.fullType();
        console.log(aniType);
        // dataObj.name[0] = aniType;
        localStorage.setItem('name', aniType);
        // render UI according to anitype
        render(aniType);

    }, false)
})


/* FARBAUSWAHL */ 
colorAll.forEach((i) => {
    i.addEventListener('input', () => {
        if(colorPrim.value || colorAcc.value || colorSec.value) {
            console.log('prim');
            dataObj.primaryColor = colorPrim.value;
            dataObj.accentColor = colorAcc.value;
            dataObj.secondaryColor = colorSec.value;
        } else {
            console.log('nix');
        }
    })
})


/* CODE OUTPUT */
const codeOutput = (key, index) => {
    console.log(codeObj[key][index].css);
    const outHTML = codeObj[key][index].html, 
        outCSS = codeObj[key][index].css,
        outJS = codeObj[key][index].js;
    outputHTML.textContent = outHTML;
    outputCSS.textContent = outCSS;
    outputJS.textContent = outJS;
};

getCode.addEventListener('click', () => {
    console.log('joo');
    const aniName = localStorage.getItem('name');
    switch (aniName) {
        case '1A': 
        console.log('enle-btn');
        codeOutput('buttons', 0);
        break;
        case '1B':
        console.log('frepi-btn');
        codeOutput('buttons', 1);
        break;
        case '1C':
        console.log('ensi-btn');
        codeOutput('buttons',2);
        break;
        case'1D':
        console.log('rusa-btn');
        codeOutput('buttons',3);
        break;
        case'2A':
        console.log('enle-check');
        codeOutput('checkbox',0);
        break;
        case'2B':
        console.log('frepi-check');
        codeOutput('checkbox',1);
        break;
        case'2C':
        console.log('ensi-check');
        codeOutput('checkbox',1);
        break;
        case'2D':
        console.log('rusa-check');
        codeOutput('checkbox',3);
        break;
        case'3A':
        console.log('enle-menu');
        codeOutput('menu',0);
        break;
        case'3B':
        console.log('frepi-menu');
        codeOutput('menu',1);
        break;
        case'3C':
        console.log('ensi-menu');
        codeOutput('menu',2);
        break;
        case'3D':
        console.log('rusa-menu');
        codeOutput('menu',3);
        break;
        default:
        return '<p>Oops, something went wrong. Select the desired one again in the Selction Area.</p>';
    }
});