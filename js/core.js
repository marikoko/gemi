/* ------ GENERATOR ---------------------------------------- */
/* ------ Store animationtype in data-object --------------- */
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
    aniPreview = document.getElementById('ani-preview');


/* ------ templates ---------------------------------------- */
// alte version: var templateBtn = function () {
const templateBtnEnle = () => {
    // If there are no data-type --> zeige Platzhalter an
    if (dataObj.component.length < 1 && dataObj.bi.length < 1) return '<p>nix zu sehen</p>';

    // If there are
    return '<button id="enleBtn">Send</button>';

    // return '<button>' + dataObj.component.map(function (item) {
    //     return '<p>' + item + '</p>';
    // }).join('') + '</button>';
};

const templateBtnFrepi = () => {
    // If there are no data-type --> zeige Platzhalter an
    if (dataObj.component.length < 1 && dataObj.bi.length < 1) return '<p>nix zu sehen</p>';

    // If there are
    return '<button id="frepiBtn">Send</button>';
};

const templateBtnEnsi = () => {
    // If there are no data-type --> zeige Platzhalter an
    if (dataObj.component.length < 1 && dataObj.bi.length < 1) return '<p>nix zu sehen</p>';

    // If there are
    return '<div id="entsiBtn"><button id="entsiBtn-text" class="success">Send</button><button id="entsiBtn-ani" class="success"><i class="fas fa-angle-right"></i></button></div>';
};

const templateBtnRusa = (aniType) => {
    // If there are no data-type --> zeige Platzhalter an
    if (dataObj.component.length < 1 && dataObj.bi.length < 1) return '<p>nix zu sehen</p>';

    // If there are
    // return '<button id="rusaBtn">Send</button>';

    const newElem = addElement('button', {id:'rusaBtn'});
    const newElem2 = document.body.appendChild(newElem);
    newElem2.innerText = 'fffff';
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

/* -------------- render --------------------------------- */
// Function to render the UI into the DOM
var render = function (aniType) {
    var aniPreview = document.querySelector('#ani-preview');
    if (!aniPreview) return;
    if (aniType === '1A') {
        aniPreview.innerHTML = templateBtnEnle(aniType);
    } else if (aniType === '1B') {
        aniPreview.innerHTML = templateBtnFrepi(aniType);
    } else if (aniType === '1C') {
        aniPreview.innerHTML = templateBtnEnsi(aniType);
    } else if (aniType === '1D') {
        aniPreview.innerHTML = templateBtnRusa(aniType);
    } else {
        return '<p>Oops, something went wrong. Select the desired one again in the Selction Area.</p>';
    }
}

//------------- UI update nach click -------------------------------//
// Funktion um Nodelist in Array umzuwandeln
nodeInArr = (list) => {
    return Array.from(list);
}

// const btnComponents = document.querySelectorAll('.btn-components'),
// btnBi = document.querySelectorAll('.btn-bi'),
// btnsAll = document.querySelectorAll('[class*="btn"]');
// var btn = document.querySelector('#btn');

// // Convert buttons NodeList to an array
// const compArr = nodeInArr(btnComponents);
// const biArr = nodeInArr(btnBi);
// const allArr = nodeInArr(btnsAll);


selectionArea.addEventListener('click', function(e) {
    console.log('area geklickt');
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
//------------- Generator End-------------------------------//

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