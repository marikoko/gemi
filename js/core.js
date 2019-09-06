/* ------ GENERATOR ---------------------------------------- */
/* STORE ANIMATIONTYPE IN DATA-OBJECT */
const dataObj = {
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
    aniPreview = document.querySelector('#ani-preview'),
    enleBtn = document.querySelector('#enleBtn'),
    frepiBtn = document.querySelector('#frepiBtn'),
    ensiBtn = document.querySelector('#ensiBtn'),
    // rusaBtn = document.querySelector('#rusaBtn'),
    aniBtns = document.querySelectorAll('.aniBtn'),
    output = document.querySelector('.code-output'),
    codeObj = {
        buttons: [
            {
                name: "enleBtn",
                html: "\<button\>\<span\>text\</span\>\</button\>",
                css: ".button{color:#234546;} .button::before{background-color:'yellow';}",
                js: "const myvar = document.querySelector('#enle'); function(){alert('hi')}"
            }
        ]
    };

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

let btnPrototype = document.querySelector('#btn-prototype');
// var outputIn = codeObj.buttons[0].html;
// console.log(outputIn);
// output.innerHTML = outputIn; 
// output.style.backgroundColor = 'red';

/* TEMPLATES */
// alte version: var templateBtn = function () {
const codeOutput = (index) => {
console.log();
const outputIn = codeObj.buttons[index].js;
const outputHTML = codeObj.buttons[index].html;
console.log(outputIn);
// output.innerHTML = outputIn; 
output.textContent = outputIn;
// output.style.backgroundColor = 'red';
};

codeOutput(0);
const templateCheck = () => {

// If there are no data-type hier kommt Platzhalter hin
if (dataObj.component.length < 1 && dataObj.bi.length < 1) return '<p>nix zu sehen</p>';

// If there are
return '<input type="checkbox" name="hobbies" value="lesen">lesen' + dataObj.component.map(function (item) {
    return '<p>' + item + '</p>';
}).join('') + '</input>';
};


/* RENDERING */
// Function to render the UI into the DOM
var render = function (aniType) {
if (!aniType) return;
console.log(aniType);
if (aniType === '1A') {
    // templateBtn('enleBtn');
    console.log('gehe zu google');
    window.location = "https://marikoko.github.io/gemi/download-files/enle-button/enle-btn.html";
} else if (aniType === '1B') {
    templateBtn('frepiBtn');
} else if (aniType === '1C') {
    templateBtn('ensiBtn');
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

selectionArea.addEventListener('click', function(e) {

// console.log('area geklickt');
// Stop the event
e.preventDefault();


// Get button
// var btn = event.target.querySelector('#btn');
var btn = e.target;
// btn.classList.add('active');
selectComponent(e);
selectBrandidentity(e);
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

// render UI according to anitype
render(aniType);

}, false);