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
    // rusaBtn = document.querySelector('#rusaBtn'),
    aniBtns = document.querySelectorAll('.aniBtn'),
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
                name: "enleBtn",
                html: "\<button\>\<span\>text\</span\>\</button\>",
                css: ".button{color:#234546;} .button::before{background-color:'yellow';}",
                js: "const myvar = document.querySelector('#enle'); function(){alert('hi')}"
            },
            {
                name: "ensiBtn",
                html: "<input type='checkbox'",
                css: ".check{width: 150px;}",
                js: "const myvar = document.querySelector('#frepi'); function(){alert('hi')}"
            }
        ]
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

/* OUTPUT */
const codeOutput = (index) => {
    console.log('joo');
    const outputHTML = codeObj.buttons[index].html, 
        outputCSS = codeObj.buttons[index].css,
        outputJS = codeObj.buttons[index].js;
    outputHTML.textContent = outputHTML;
    outputCSS.textContent = outputCSS;
    outputJS.textContent = outputJS;
};

getCode.addEventListener('click', () => {
    console.log('joo');
    if(dataObj.name[0] === '1A') {
        let getHTML = codeObj.buttons[0].html, 
            getCSS = codeObj.buttons[0].css,
            getJS = codeObj.buttons[0].js;
    } else if (dataObj.name[0] === '2A') {
        let getHTML = codeObj.buttons[1].html, 
        getCSS = codeObj.buttons[1].css,
        getJS = codeObj.buttons[1].js;
    }
    
    outputHTML.textContent = getHTML;
    outputCSS.textContent = getCSS;
    outputJS.textContent = getJS;
});
/* TEMPLATE */
const templateBtn = (type) =>{
    const animaType = type;
    window.location = "https://marikoko.github.io/gemi/download-files/"+animaType +".html";
}


/* RENDERING */
// Function to render the UI into the DOM
const render = (aniType) => {
    if (!aniType) return;
    console.log(aniType);
    if (aniType === '1A') {
        templateBtn('enle-btn');
        // window.location = "https://marikoko.github.io/gemi/download-files/enle-button/enle-btn.html";
    } else if (aniType === '1B') {
            // templateBtn('frepiBtn');
    } else if (aniType === '1C') {
        // templateBtn('ensiBtn');
    } else if (aniType === '1D') {
        // templateBtn('rusaBtn');
        window.location = "https://marikoko.github.io/gemi/download-files/rusa-button/rusa-btn.html";
    } else {
            return '<p>Oops, something went wrong. Select the desired one again in the Selction Area.</p>';
    }
}

/* UI UPDATE NACH CLICK */
// Funktion um Nodelist in Array umzuwandeln
nodeInArr = (list) => {
return Array.from(list);
}

selectButtons.forEach((i) => {
    i.addEventListener('click', (e) => {

        // console.log('area geklickt');
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
        const aniType = dataObj.fullType();
        dataObj.name[0] = aniType;
        // render UI according to anitype
        render(aniType);

    }, false)
})