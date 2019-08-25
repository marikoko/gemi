const dataC = 1,
	dataI = 'A',
	dataObj = {
		component: [],
		bi: [],
		fullType: function() {
			return this.component + this.bi;
		}
	},

	dataArr = [];

	changeCssSource = document.querySelector('#custom'),
	changeJsSource = document.querySelector('script');

/* -------------- templates --------------------------------- */
var template = function () {

	// If there are no data-type hier kommt Platzhalter hin
	if (dataObj.component.length < 1 && dataObj.bi.length < 1) return '<p>nix zu sehen</p>';

	// If there are
	return '<button>' + dataObj.component.map(function (item) {
		return '<p>' + item + '</p>';
	}).join('') + '</button>';

	// return '<button>' + dataObj.component.map(function (item) {
	// 	return '<p>' + item + '</p>';
	// }).join('') + '</button>';
};

/* -------------- render --------------------------------- */
// Function to render the UI into the DOM
var render = function () {
	var aniShow = document.querySelector('#ani-show');
	if (!aniShow) return;
	aniShow.innerHTML = template();
};

// Render the UI
render();

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


document.addEventListener('click', function (e) {
	console.log('geklickt');
	// Make sure the submitted form was for our list items
	// if (!event.target.matches('#add-to-list')) return;

	// Stop the event
	event.preventDefault();

	// Get button
	// var btn = event.target.querySelector('#btn');
	var btn = e.target;
	console.log(btn);
	var type = btn.getAttribute('data-type');
	console.log(type);
	// var actualBtn = nodeInArr(btn);
	// console.log(actualBtn);
	// var type = btn.getAttribut('data-type');
	// console.log(type);

	if(type ==='comp') {
		console.log('Yeah');
		// Update the data
		dataObj.component.push(btn.dataset.comp);
	} else if(type ==='bi'){
		console.log('wooooo');
		dataObj.bi.push(btn.dataset.bi);
	} else {
		console.log('fehler');
	}
	// const dataI = e.target.dataset.bi;
	// console.log(dataI + 'bi');
	// dataObj.bi = dataI;
	render();
	
	allArr.forEach((btn) => {
		console.log(e.target);

		var type = allArr.map(function(i) {
			return i.getAttribute('data-type');
		});
		// console.log(type);

		if(type ==='comp') {
			console.log('Yeah');
			// Update the data
			dataObj.component.push(btn.dataset.comp);
		} else if(type ==='bi'){
			console.log('wooooo');
			dataObj.bi.push(btn.dataset.bi);
		} else {
			console.log('fehler');
		}
		// const dataI = e.target.dataset.bi;
		// console.log(dataI + 'bi');
		// dataObj.bi = dataI;
		render();
	})	

	// if (!btn || btn.length < 1) return;

	// Update the data and UI
	// dataObj.component.push(btn.dataset.comp);
	// render();

	// Clear the field and return to focus
	dataObj.component.value = '';
	// item.focus();

}, false);


// // Funktion get data
// component = (arr) => {
// 	arr.forEach((btn) => {
// 		btn.addEventListener('click', (e) => {
// 			const dataC = e.target.dataset.comp;
// 			// console.log(dataC + "comp");
// 			dataObj.component = dataC; 
// 			createType();
// 		})
// 	})
// }

// brand = (arr) => {
// 	arr.forEach((btn) => {
// 		btn.addEventListener('click', (e) => {
// 			const dataI = e.target.dataset.bi;
// 			// console.log(dataI + 'bi');
// 			dataObj.bi = dataI;
// 			createType();
// 		})
// 	})	
// }

// createType = () => {
// 	let type = dataObj.fullType();
// 	// console.log(type);
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


// // Store component code and brand identity code in object
// const setComp = component(compArr);
// const setBi = brand(biArr);
// const data = setData(compArr, biArr);
// setData(btnsArr);

//--------------------------------------------------------------//
