const aniDisplay = document.querySelector('#ani-display'),
	btnComponents = document.querySelectorAll('.btn-components'),
	btnBi = document.querySelectorAll('.btn-bi'),
	btnsAll = document.querySelectorAll('[class*="btn"]');
	// flagBi = false;
	// flagComp = false;
	dataC = 1,
	dataI = 'A',
	dataArr = [],
	dataObj = {
		component: dataC,
		bi: dataI,
		fullType: function() {
			return this.component + this.bi;
		}
	},

	changeCssSource = document.querySelector('#custom'),
	changeJsSource = document.querySelector('script');


//------------- get and set key figures -------------------------------//
// Funktion um Nodelist in Array umzuwandeln
nodeInArr = (list) => {
	return Array.from(list);
}

// createType = (comp, bi) => {
// 	let type = {};
// 	type.component = comp;
// 	type.bi = bi;
// }

// Funktion get data
component = (arr) => {
	arr.forEach((btn) => {
		btn.addEventListener('click', (e) => {
			const dataC = e.target.dataset.comp;
			// console.log(dataC + "comp");
			dataObj.component = dataC; 
			createType();

			// console.log(dataObj);
			// const datatype = dataObj.fullType();
			// console.log( datatype);
			// changeDisplay();
			// return rrr;
		})
	})
}

brand = (arr) => {
	arr.forEach((btn) => {
		btn.addEventListener('click', (e) => {
			const dataI = e.target.dataset.bi;
			// console.log(dataI + 'bi');
			dataObj.bi = dataI;
			createType();

			// changeDisplay();
			// console.log(dataObj);
			// const datatype = dataObj.fullType();
			// console.log( datatype);
			// changeDisplay();
			// return rrr;
		})
	})	
}

createType = () => {
	let type = dataObj.fullType();
	// console.log(type);
	switch (type) {
		case '1A':
			changeCssSource.setAttribute('href', '../assets/enle.css');
			changeJsSource.setAttribute('src', '../js/enle-btn.js');
			console.log(aniDisplay.innerHTML = 'button-enle');
			break;
		case '1B':
			console.log(aniDisplay.innerHTML = 'button-frepi');
			break;
		case '1C':
			console.log(aniDisplay.innerHTML = 'button-entsi');
			break;
		case '1D':
			console.log(aniDisplay.innerHTML = 'button-rusa');
			break;
		case '2A':
			console.log(aniDisplay.innerHTML = 'radio-enle');
			break;
		case '2B':
			console.log(aniDisplay.innerHTML = 'radio-frepi');
			break;
		case '2C':
			console.log(aniDisplay.innerHTML = 'radio-entsi');
			break;
		case '2D':
			console.log(aniDisplay.innerHTML = 'radio-rusa');
			break;
		case '3A':
			console.log(aniDisplay.innerHTML = 'text-enle');
			break;
		case '3B':
			console.log(aniDisplay.innerHTML = 'text-frepi');
			break;
		case '3C':
			console.log(aniDisplay.innerHTML = 'text-entsi');
			break;
		case '3D':
			console.log(aniDisplay.innerHTML = 'text-rusa');
			break;
		case '4A':
			console.log(aniDisplay.innerHTML = 'modal-enle');
			break;
		case '4B':
			console.log(aniDisplay.innerHTML = 'modal-frepi');
			break;
		case '4C':
			console.log(aniDisplay.innerHTML = 'modal-entsi');
			break;
		case '4D':
			console.log(aniDisplay.innerHTML = 'modal-rusa');
			break;
		default:
			console.log('fehler');
	}	
}




// Convert buttons NodeList to an array
const compArr = nodeInArr(btnComponents);
console.log(compArr);
const biArr = nodeInArr(btnBi);
console.log(biArr);
const btnsArr = nodeInArr(btnsAll);
console.log(btnsArr);

// setData = (arr1, arr2) => {
// 	component(arr1);
// 	brand(arr2);
// 	const datatype = dataObj.fullType();
// 	console.log( datatype);
// }

// setData = (dataComp, dataBi) => {
// 	arr.forEach((btn) => {
// 		btn.addEventListener('click', (e) => {
// 			const dataI = e.target.dataset.bi;
// 			const dataC = e.target.dataset.comp;

// 			console.log(dataI + 'bi');
// 			dataObj.bi = dataI;
// 			console.log(dataC + "comp");
// 			dataObj.component = dataC; 
// 			console.log(dataObj);
// 			// changeDisplay();
// 		})
// 	})	
// }


// Store component code and brand identity code in object
const setComp = component(compArr);
const setBi = brand(biArr);
// const data = setData(compArr, biArr);
// setData(btnsArr);

//--------------------------------------------------------------//

//------- Output of branded Component in Display ---------------//



/* ------- test createElement() -------------------------------*/
const element = document.querySelector('#ani-display div');
element.textContent = 'ich bin Heike';
element.innerHTML = 'ich <a href="wwww.google.de">bin</a> Thomas';
let textNode = document.createTextNode('hallo');
element.appendChild(textNode);


const sect = document.querySelector('#neu');
console.log(sect);
let neuesDiv = document.createElement('div');
sect.appendChild(neuesDiv);
let inhalt = document.createTextNode('yeah');
neuesDiv.appendChild(inhalt);
// sect.removeChild(neuesDiv);

/*-------------------------------------------------------------*/



/* -----------Test ------------*/
	// selectInput is the select element w/ id of 'choose'
// 	var selectInput = document.getElementById('choose'),
// 		// here we are compiling a list of all the nodes w/ a class of 'options'
// 		panels = document.querySelectorAll('.options'),
// 		currentSelect,
// 		elmClass,
// 		i;
  
  
// 	// To allow for compatibility with IE < 10,
// 	// we'll use these custom add/remove class functions
// 	// instead of classList.add()/.remove()
  
// 	function addClass( elm, newClass ) {
// 	  elm.className += ' ' + newClass;
// 	}
  
  
// 	function removeClass( elm, deleteClass ) {
// 	  elm.className = elm.className.replace(new RegExp("\\b" + deleteClass + "\\b", 'g'), '').trim();
// 	  // the RegExp here makes sure that only the class we want to delete, and not any other
// 	  // potentially matching stings get deleted.
// 	  // e.g. -- if deleteClass = options and we also had a class of options--1 and options
// 	  // on the elm, just the class of options would get deleted
// 	}
  
  
// 	// Function to go through all nodes with 'options' as a class
// 	// and remove the class of 'show' from them.
// 	function clearShow() {
// 	  for ( i = 0; i < panels.length; i++ ) {
// 		removeClass( panels[i], 'show');
// 	  }
// 	}
  
  
// 	// Function to add the class of show to the node that has
// 	// the class that matches the current value of the select drop down (#choose)
// 	function addShow( showThis ) {
// 	  var el = document.getElementsByClassName( showThis );
// 	  for ( i = 0; i < el.length; i++ ) {
// 		addClass( el[i], 'show')
// 	  }
// 	}
  
  
// 	// Run the clear/add functions and set the value for what
// 	function vUpdate () {
// 	  currentSelect = selectInput.value;
  
// 	  clearShow();
// 	  addShow(currentSelect);
// 	}
  
  
// 	// Update the value of currentSelect when selectInput changes option focus
// 	selectInput.addEventListener('change', vUpdate);
  
  
// 	// If a page is refreshed the select input may not reset to the default
// 	// option. If that's the case, find the current value of #choose
// 	// and run addShow() to make that content block visible
// 	if (selectInput.value !== 'nul') {
// 	  currentSelect = selectInput.value;
// 	  addShow(currentSelect);
// 	}
  
//   })(); // close IIFE