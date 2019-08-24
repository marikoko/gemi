const quotes = [
	'love is in the air', 
	'live is wonderfull', 
	'The best things arent things', 
	'lebe wild und gefährlich', 
	'assdfasf askdf skfaösd', 
	'heul doch',
	'Lieblingsmensch' 
],
	btn = document.querySelector('#quote'),
	quoteDisplay = document.querySelector('#quotedisplay');
	btnComponents = document.querySelectorAll('.btn-components');
	btnBtn = document.querySelector('#btn');
	btnCheck = document.querySelector('#check');
	btnText = document.querySelector('#text');
	btnModal = document.querySelector('#modal'),
	dataSet = [];


const newQuote = (num) => {
	quoteDisplay.innerHTML = quotes[num];
	console.log(quotes[num]);
}

const randomNum = () => {
	let num = Math.floor(Math.random()*5);
	console.log(num);
	newQuote(num);
}

btn.addEventListener('click',randomNum);

// Convert buttons NodeList to an array
// var btnsArr = Array.prototype.slice.call(btnComponents);
var btnsArr = Array.from(btnComponents);
console.log(btnsArr[1]);

for(let i=0; i<=btnsArr.length; i++){
	btnsArr[i].addEventListener('click', function(){
		// console.log(btnsArr[i].dataset.comp);
		//in Array pushen
		dataSet.push(btnsArr[i].dataset.comp);
		console.log(dataSet);
		//wenn mehr als ein Eintrag ersten Eintrag löschen
		if (dataSet.length>0) {
			console.log('größer');
			// ersten Eintrag lösschen
			dataSet.shift();
		}
	})
}

btnsArr.forEach(function(comp, index){
	console.log(comp.dataset.comp);
})	



