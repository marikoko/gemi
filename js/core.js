/* ------ GENERATOR ---------------------------------------- */
/* STORE ANIMATIONTYPE IN DATA-OBJECT */
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
    getCode = document.querySelector('.get-code'),

    aniPreview = document.querySelector('#ani-preview'),
    // enleBtn = document.querySelector('#enleBtn'),
    // frepiBtn = document.querySelector('#frepiBtn'),
    // ensiBtn = document.querySelector('#ensiBtn'),
    // // rusaBtn = document.querySelector('#rusaBtn'),
    // aniBtns = document.querySelectorAll('.aniBtn'),
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
                html: "frepi-check-html",
                css: "frepi-check-css",
                js: "frepi-check-js"
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
                html: "enle-menu-html",
                css: "enle-menu-css",
                js: "enle-menu-js"
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
    // window.location = "https://marikoko.github.io/gemi/download-files/"+type+".html";
    window.location = "../download-files/"+type+".html";
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
        selectComponent(e);
        selectBrandidentity(e);
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