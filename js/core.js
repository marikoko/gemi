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
    aniPreview = document.querySelector('#ani-preview'),
    enleBtn = document.querySelector('#enleBtn'),
    frepiBtn = document.querySelector('#frepiBtn'),
    ensiBtn = document.querySelector('#ensiBtn'),
    // rusaBtn = document.querySelector('#rusaBtn'),
    aniBtns = document.querySelectorAll('.aniBtn');

let btnPrototype = document.querySelector('#btn-prototype');


/* TEMPLATES */
// alte version: var templateBtn = function () {
const templateBtn = (type) => {
    console.log(type);
    btnPrototype.setAttribute('id', type);
    btnPrototype.addEventListener('mouseenter', function() {
        const attr = btnPrototype.getAttribute('id');
        animateHover(attr);
    })
    btnPrototype.addEventListener('click', function() {
        const attr = btnPrototype.getAttribute('id');
        animateBtn(attr);
    })
};

const templateCheck = () => {

    // If there are no data-type hier kommt Platzhalter hin
    if (dataObj.component.length < 1 && dataObj.bi.length < 1) return '<p>nix zu sehen</p>';

    // If there are
    return '<input type="checkbox" name="hobbies" value="lesen">lesen' + dataObj.component.map(function (item) {
        return '<p>' + item + '</p>';
    }).join('') + '</input>';
};

const templateTextField = () => {
    // If there are no data-type --> zeige Platzhalter an
    if (dataObj.component.length < 1 && dataObj.bi.length < 1) return '<p>nix zu sehen</p>';

    // If there are
    return '<button>' + dataObj.component.map(function (item) {
        return '<p>' + item + '</p>';
    }).join('') + '</button>';
};

const templateModal = () => {
    // If there are no data-type --> zeige Platzhalter an
    if (dataObj.component.length < 1 && dataObj.bi.length < 1) return '<p>nix zu sehen</p>';

    // If there are
    return '<button>' + dataObj.component.map(function (item) {
        return '<p>' + item + '</p>';
    }).join('') + '</button>';
};

/* RENDERING */
// Function to render the UI into the DOM
var render = function (aniType) {
    if (!aniType) return;
    console.log(aniType);
    if (aniType === '1A') {
        templateBtn('enleBtn');
    } else if (aniType === '1B') {
        templateBtn('frepiBtn');
    } else if (aniType === '1C') {
        templateBtn('ensiBtn');
    } else if (aniType === '1D') {
        templateBtn('rusaBtn');
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
    // console.log(btn);
    var type = btn.getAttribute('data-type');
    // console.log(type);

    if(type ==='comp') {
        console.log('Yeah');
        // Update the data
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



/* TESTS */

function addElement(type, attributes) { 
    const elem = document.createElement(type);
	// var aniPreview = document.getElementsByClassName('container');
    for (key in attributes) {
         elem.setAttribute(key, attributes[key])
    }
    console.log(elem);
    // return elem; 
  }

//   addElement();

// const elFactory = (type, attributes, ...children) => {
//     const el = document.createElement(type);
  
//     for (key in attributes) {
//       el.setAttribute(key, attributes[key])
//     }
  
//     children.forEach(child => {
//       if (typeof child === 'string') {
//         el.appendChild(document.createTextNode(child))
//       } else {
//         el.appendChild(child)
//       }
//     })
  
//     return el;
//   };