const fruitInput = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions');

const fruitsList = ['Apple 🍎', 'Apricot', 'Avocado 🥑', 'Banana 🍌', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry 🫐', 'Boysenberry', 'Currant', 'Cherry 🍒', 'Coconut 🥥', 'Cranberry ', 'Cucumber 🥒', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape 🍇', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit 🥝', 'Kumquat', 'Lemon 🍋', 'Lime ', 'Loquat', 'Longan', 'Lychee', 'Mango 🥭', 'Mangosteen', 'Marionberry', 'Melon 🍈', 'Cantaloupe', 'Honeydew', 'Watermelon 🍉', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive 🫒', 'Orange 🍊', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach 🍑', 'Pear 🍐', 'Persimmon', 'Plantain', 'Plum', 'Pineapple 🍍', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry 🍓', 'Tamarillo', 'Tamarind', 'Tomato 🍅', 'Yuzu'];

	
	

fruitInput.onkeyup = function(){
	let results = [];
	let input = fruitInput.value;
	if(input.length){
		results = fruitsList.filter((key)=>{
			return key.toLowerCase().includes(input.toLowerCase());
		});
	}
	displayBox(results);

	if(!results.length){
		suggestions.innerHTML = "";
	}
   }

function displayBox(results){
	const listcontent = results.map((list)=>{
		return "<li onclick=selectInput(this)>" + list + "</li>"
		});

		suggestions.innerHTML = "<ul>" + listcontent.join('') + "</ul>";
}

function selectInput(list){
	fruitInput.value = list.innerHTML;
	suggestions.innerHTML = "";

}

const refreshPageClick = document.querySelector('.button')

const refreshPage = () => {
	location.reload();
}

refreshPageClick.addEventListener('click', refreshPage)