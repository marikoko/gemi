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
};

/* ------ templates ---------------------------------------- */
// alte version: var templateBtn = function () {
const templateBtn = () => {

	// If there are no data-type --> zeige Platzhalter an
	if (dataObj.component.length < 1 && dataObj.bi.length < 1) return '<p>nix zu sehen</p>';

	// If there are
	return '<button>' + dataObj.component.map(function (item) {
		return '<p>' + item + '</p>';
	}).join('') + '</button>';
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
}

const templateModal = () => {
	// If there are no data-type --> zeige Platzhalter an
	if (dataObj.component.length < 1 && dataObj.bi.length < 1) return '<p>nix zu sehen</p>';

	// If there are
	return '<button>' + dataObj.component.map(function (item) {
		return '<p>' + item + '</p>';
	}).join('') + '</button>';
}

/* -------------- render --------------------------------- */
// Function to render the UI into the DOM
var render = function (aniType) {
	var aniShow = document.querySelector('#ani-show');
	if (!aniShow) return;
	if (aniType === '1A') {
		aniShow.innerHTML = templateBtn();
	} else if (aniType === '2A') {
		aniShow.innerHTML = templateCheck();
	} else {
		console.log('Fehler');
	}
};

// Render the UI
// render();

//------------- UI update nach click -------------------------------//
// Funktion um Nodelist in Array umzuwandeln
nodeInArr = (list) => {
	return Array.from(list);
}

const btnComponents = document.querySelectorAll('.btn-components'),
	btnBi = document.querySelectorAll('.btn-bi'),
	btnsAll = document.querySelectorAll('[class*="btn"]');


var btn = document.querySelector('#btn');

// Convert buttons NodeList to an array
const compArr = nodeInArr(btnComponents);
const biArr = nodeInArr(btnBi);
const allArr = nodeInArr(btnsAll);


document.addEventListener('click', function(e) {
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


// 	switch (type) {
// 		case '1A':
// 			changeCssSource.setAttribute('href', '../assets/enle.css');
// 			changeJsSource.setAttribute('src', '../js/enle-btn.js');
// 			console.log(aniDisplay.innerHTML = 'button-enle');
// 			break;
// 		case '1B':
// 			console.log(aniDisplay.innerHTML = 'button-frepi');
// 			break;
// 		case '1C':
// 			console.log(aniDisplay.innerHTML = 'button-entsi');
// 			break;
// 		case '1D':
// 			console.log(aniDisplay.innerHTML = 'button-rusa');
// 			break;
// 		case '2A':
// 			console.log(aniDisplay.innerHTML = 'radio-enle');
// 			break;
// 		case '2B':
// 			console.log(aniDisplay.innerHTML = 'radio-frepi');
// 			break;
// 		case '2C':
// 			console.log(aniDisplay.innerHTML = 'radio-entsi');
// 			break;
// 		case '2D':
// 			console.log(aniDisplay.innerHTML = 'radio-rusa');
// 			break;
// 		case '3A':
// 			console.log(aniDisplay.innerHTML = 'text-enle');
// 			break;
// 		case '3B':
// 			console.log(aniDisplay.innerHTML = 'text-frepi');
// 			break;
// 		case '3C':
// 			console.log(aniDisplay.innerHTML = 'text-entsi');
// 			break;
// 		case '3D':
// 			console.log(aniDisplay.innerHTML = 'text-rusa');
// 			break;
// 		case '4A':
// 			console.log(aniDisplay.innerHTML = 'modal-enle');
// 			break;
// 		case '4B':
// 			console.log(aniDisplay.innerHTML = 'modal-frepi');
// 			break;
// 		case '4C':
// 			console.log(aniDisplay.innerHTML = 'modal-entsi');
// 			break;
// 		case '4D':
// 			console.log(aniDisplay.innerHTML = 'modal-rusa');
// 			break;
// 		default:
// 			console.log('fehler');
// 	}	
// }

