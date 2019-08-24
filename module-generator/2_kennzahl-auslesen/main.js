const quotes = [
	'love is in the air', 
	'live is wonderfull', 
	'The best things arent things', 
	'lebe wild und gefährlich', 
	'assdfasf askdf skfaösd', 
	'heul doch',
	'Lieblingsmensch' 
],
	aniDisplay = document.querySelector('#ani-display'),
	btnComponents = document.querySelectorAll('.btn-components'),
	btnBi = document.querySelectorAll('.btn-bi'),
	btnsAll = document.querySelectorAll('.btn-select');
	btnBtn = document.querySelector('#btn'),
	btnCheck = document.querySelector('#check'),
	btnText = document.querySelector('#text'),
	btnModal = document.querySelector('#modal'),
	dataArr = [],
	dataObj = {
		component: '1',
		bi: 'A',
		fullType: function() {
			return this.component + this.bi;
		}
	};

	// Darstellen des Ergenisses in Displaybereich
	aniDisplay.innerHTML = dataObj.fullType();




// Funktion um Nodelist in Array umzuwandeln
nodeInArr = (list) => {
	return Array.from(list);
}

// Funktion get data
getComp = (arr) => {
	arr.forEach((btn) => {
		btn.addEventListener('click', (e) => {
			const dataC = e.target.dataset.comp;
			console.log(dataC + "comp");

			dataObj.component = dataC; 

			console.log(dataObj);
		})
	})
}

getBi = (arr) => {
	arr.forEach((btn) => {
		btn.addEventListener('click', (e) => {
			console.log('geklickt');
			const dataI = e.target.dataset.bi;
			console.log(dataI + 'bi');

			dataObj.bi = dataI;

			console.log(dataObj);
		})
	})	
	// for(let i=0; i<=arr.length; i++){
	// 	arr[i].addEventListener('click', function(){
	// 		console.log('geklickt');
	// 		const dataI = arr[i].dataset.bi;
	// 		console.log(dataI + 'bi');

	// 		dataObj.bi = dataI;

	// 		console.log(dataObj);
	// 	})
	// }
}



// Convert buttons NodeList to an array
// var btnsArr = Array.prototype.slice.call(btnComponents);
const compArr = nodeInArr(btnComponents);
console.log(compArr);
const biArr = nodeInArr(btnBi);
console.log(biArr);
// const btnsArr = nodeInArr(btnsAll);
// console.log(btnsArr);

const comp = getComp(compArr);
const bi = getBi(biArr);
// const data = getData(btnsArr);


// biArr.forEach((btn) => {
// 	btn.addEventListener('click', () => {
// 		alert('hi');
// 	})
// })	

// for(let i=0; i<=biArr.length; i++){
// 	biArr[i].addEventListener('click', function(){
// 		//in Array pushen
// 		const data = biArr[i].dataset.bi;

// 		dataObj.bi = data;
// 		console.log(dataObj);
// 	})
// }

// for(let i=0; i<=btnsArr.length; i++){
// 	btnsArr[i].addEventListener('click', function(){
// 		// console.log(btnsArr[i].dataset.comp);
// 		//in Array pushen
// 		const data = btnsArr[i].dataset.comp;

// 		dataObj.component = data;
// 		console.log(dataObj);
// 	})
// }

// btnsArr.forEach(function(comp, index){
// 	console.log(comp.dataset.comp);
// })	

// getComp = (arr) => {
// 	for(let i=0; i<=arr.length; i++){
// 		arr[i].addEventListener('click', function(){
// 			const dataC = arr[i].dataset.comp;
// 			console.log(dataC + "comp");

// 			dataObj.component = dataC; 

// 			console.log(dataObj);
// 		})
// 	}
// }